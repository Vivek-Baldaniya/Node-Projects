const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');
const AuthController = require('../controllers/auth');

describe('Auth Controller', function() {
    before(function(done) {
        mongoose
            .connect(
                'mongodb+srv://Vivek_Baldaniya:Vivek456@cluster0.32anq.mongodb.net/test-messages?retryWrites=true&w=majority'
            )
            .then(result => {
                const user = new User({
                    email: 'vivek@gmail.com',
                    password: 'Vivek',
                    name: 'Vivek',
                    posts: [],
                    _id: '61adf0047cb069179441dbbe'
                })
                return user.save();
            })
            .then(() => {
                done();
            })
    })
    it('should throw an error with code 500 if accessing the database fails', function(done) {
        sinon.stub(User, 'findOne');
        User.findOne.throws();

        const req = {
            body: {
                email: 'vivek@gmail.com',
                password: 'Vivek'
            }
        }

        AuthController.login(req, {}, () => {}).then(result => {
            expect(result).to.be.an('error');
            expect(result).to.have.property('statusCode', 500);
            done();
        });

        User.findOne.restore();
    });

    it('should send a response with a valid user status for an existing user', function(done) {
        const req = {
            userId: '61adf0047cb069179441dbbe'
        };
        const res = {
            statusCode: 500,
            userStatus: null,
            status: function(code) {
                this.statusCode = code;
                return this;
            },
            json: function(data) {
                this.userStatus = data.status;
            }
        };
        AuthController.getUserStatus(req, res, () => {}).then(() => {
            expect(res.statusCode).to.be.equal(200);
            expect(res.userStatus).to.be.equal('I am new!');
            done();
        })
    });

    after(function(done) {
        User.deleteMany({})
            .then(() => {
                return mongoose.disconnect()
            }).then(() => {
                done();
            });
    })
})