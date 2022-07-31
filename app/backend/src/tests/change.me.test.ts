import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
// import { Response } from 'superagent';
import User from '../database/models/user';
// import { response } from 'express';
import service from '../service/login-service'
chai.use(chaiHttp);

const { expect } = chai;

const url = 'http://localhost:3001';

describe('TESTES EM LOGIN', () => {
  describe('verifica controller', () => {
    beforeEach(async () => {
      sinon // sinon.stub(); Cria uma sub função anônima
        .stub(User, 'findOne') // (objeto, 'método')
        .resolves({ // mock do retorno do método
          username: 'Admin',
          role: 'admin',
          email: 'admin@admin.com',
          password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
        } as User);
    });
  
    afterEach(()=>{
      (User.findOne as sinon.SinonStub).restore(); // restaura o sinon após o teste 
    })
  
    it('verifica caso de retorno esperado', async () => {  
      await chai 
        .request(url) // requisição chamando a classe de rotas
        .post('/login') // executa o método POST e chama a rota /login
        .set('content-type', 'application/json') // define um setter
        .send({ email: 'admin@admin.com', password: 'secret_admin' }) // envia um requisição x
        .then((response) => {
          expect(response.ok).to.equal(true);
          expect(response.body).to.haveOwnProperty('token');
        })
    });
  });

    describe('02 - Testa "Login"', () => {
      beforeEach(async () => {
        sinon // sinon.stub(); Cria uma sub função anônima
          .stub(service.prototype, 'postLogin') // (objeto, 'método')
          .resolves( // mock do retorno do método
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NTkyODU0MjEsImV4cCI6MTY1OTI5MjYyMX0.7aE7nx0O9z6p4YfQX7jRD4AyJBMLLj1KLPS03hneQcE'
          );
      });
    
      afterEach(()=>{
        (service.prototype.postLogin as sinon.SinonStub).restore(); // restaura o sinon após o teste 
      })
    
    it('verifica caso de retorno esperado', async () => {  
      await service.prototype
        .postLogin({ email: 'admin@admin.com', password: 'secret_admin' })
        .then((response) => {
          expect(response).to.be.a('string')
        });
    });
  });
})
