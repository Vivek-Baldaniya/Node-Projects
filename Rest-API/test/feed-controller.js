const expect = require('chai').expect;
const mongoose = require('mongoose');

const User = require('../models/user');
const FeedController = require('../controllers/feed');

describe('Feed Controller', function() {
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
    it('should add a created post to the posts of the creator', function(done) {
        const req = {
            body: {
                title: 'Test Post',
                content: 'A test post'
            },
            file: {
                path: 'abc'
            },
            userId: '61adf0047cb069179441dbbe'
        }
        const res = {
            status: function() {
                return this;
            },
            json: function() {}
        };
        FeedController.createPost(req, res, () => {}).then((savedUser) => {
            expect(savedUser).to.have.property('posts');
            expect(savedUser.posts).to.have.length(1);
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