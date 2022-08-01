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
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NTkzNjE5NDYsImV4cCI6MTY1OTM2OTE0Nn0.T8LDlmYlLQ_6N9ZCapm7s7JSdSm_T-zdsXDbIF9lg9s';

describe('TESTES EM LOGIN', () => {
  describe('/login', () => {
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

  describe('/login', () => {
    beforeEach(async () => {
      sinon // sinon.stub(); Cria uma sub função anônima
        .stub(service.prototype, 'postLogin') // (objeto, 'método')
        .resolves( // mock do retorno do método
          token
        );
    });
  
    afterEach(()=>{
      (service.prototype.postLogin as sinon.SinonStub).restore(); // restaura o sinon após o teste 
    })
    
    it('verifica caso de retorno de token', async () => {  
      await service.prototype
        .postLogin({ email: 'admin@admin.com', password: 'secret_admin' })
        .then((response) => {
          expect(response).to.be.a('string')
        });
    });
  });

  describe('Quando o email não é informado no login', () => {
    it('verifica caso de retorno esperado', async () => {  
      await chai 
        .request(url) // requisição chamando a classe de rotas
        .post('/login') // executa o método POST e chama a rota /login
        // .set('content-type', 'application/json') // define um setter
        .send({ password: 'secret_admin' }) // envia um requisição x
        .then((response) => {
          expect(response.badRequest).to.equal(true);
          expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' })
        })
    });
  });

  describe('Quando o email informado no login é inválido', () => {
    it('verifica caso de retorno esperado', async () => {  
      await chai 
        .request(url) // requisição chamando a classe de rotas
        .post('/login') // executa o método POST e chama a rota /login
        // .set('content-type', 'application/json') // define um setter
        .send({ email: 'admin@.com', password: 'secret_admin' }) // envia um requisição x
        .then((response) => {
          expect(response.unauthorized).to.equal(true);
          expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' })
        })
    });
  });

  describe('Quando o password não é informado no login', () => {
    it('verifica caso de retorno esperado', async () => {  
      await chai 
        .request(url) // requisição chamando a classe de rotas
        .post('/login') // executa o método POST e chama a rota /login
        // .set('content-type', 'application/json') // define um setter
        .send({ email: 'admin@admin.com' }) // envia um requisição x
        .then((response) => {
          expect(response.badRequest).to.equal(true);
          expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' })
        })
    });
  });

  describe('Quando o password informado no login é inválido', () => {
    it('verifica caso de retorno esperado', async () => {  
      await chai 
        .request(url) // requisição chamando a classe de rotas
        .post('/login') // executa o método POST e chama a rota /login
        // .set('content-type', 'application/json') // define um setter
        .send({ email: 'admin@admin.com', password: 'secret_admina' }) // envia um requisição x
        .then((response) => {
          expect(response.unauthorized).to.equal(true);
          expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' })
        })
    });
  });

  // describe('Quando o token passado for um token válido', () => {
  //   it('verifica caso de retorno esperado', async () => {  
  //     await chai 
  //       .request(url) // requisição chamando a classe de rotas
  //       .post('/login/validate') // executa o método POST e chama a rota /login
  //       .set('Authorization', token) // define um setter
  //       // .send({ email: 'admin@admin.com', password: 'secret_admina' }) // envia um requisição x
  //       .then((response) => {
  //         expect(response.ok).to.equal(true);
  //         expect(response.body).to.be.deep.equal({ role: 'admin' })
  //       })
  //   });
  // });
})
