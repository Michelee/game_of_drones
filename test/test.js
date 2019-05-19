//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Player = require('../models/Player');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

chai.should();
chai.use(chaiHttp);

// Players endpoints
describe('Players', () => {
  describe('/GET players', () => {
      it('it should GET all the players', (done) => {
        chai.request(server)
          .get('/api/players')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          });
      });
  });
});

// Game endpoints
describe('Game', () => {
  describe('/POST newgame', () => {
    it('it should not create a game if one of the players is missing', (done) => {
      let newgame = {
        namePlayerOne: 'michele'
      }
      chai.request(server)
        .post('/api/newgame')
        .send(newgame)
        .end((err, res) => {
              res.should.have.status(400);
          done();
        });
    });

    it('it should create a new game', (done) => {
      let newgame = {
        namePlayerOne: 'michele',
        namePlayerTwo: 'andreina'
      }
      chai.request(server)
        .post('/api/newgame')
        .send(newgame)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('gameId');
          done();
        });
    });
  });

  describe('/POST endgame', () => {
    it('it should not update the game if there is no gameId', (done) => {
      let endgame = {
        winnerId: 'michele'
      }
      chai.request(server)
        .post('/api/endgame')
        .send(endgame)
        .end((err, res) => {
              res.should.have.status(400);
          done();
        });
    });

    it('it should update the game with the winner information', (done) => {
      let endgame = {
        gameId: '5ce03ad33d0bd10b5f79d403',
        winnerId: '5ce03a68b3630b0b4fd05d1b'
      }
      chai.request(server)
        .post('/api/endgame')
        .send(endgame)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('text').eql('Successfully saved');
          done();
        });
    });
  });
});

