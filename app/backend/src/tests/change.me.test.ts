import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
// import { Response } from 'superagent';
import User from '../database/models/user';
import { ok } from 'assert';
// import { response } from 'express';

chai.use(chaiHttp);

const { expect } = chai;

const url = 'http://localhost:3001';

describe('Meus Testes', () => {
  describe('02 - Testa "Login"', () => {
    before(async () => {
      sinon // sinon.stub(); Cria uma sub função anônima
        .stub(User, 'findOne') // (objeto, 'método')
        .resolves({ // mock do retorno do método
          username: 'Admin',
          role: 'admin',
          email: 'admin@admin.com',
          password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
        } as User);
    });
  
    after(()=>{
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
  
    // it('Seu sub-teste', () => {
    //   expect(false).to.be.eq(true);
    // });
  });
})
