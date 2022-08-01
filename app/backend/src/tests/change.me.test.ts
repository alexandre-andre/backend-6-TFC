import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
// import { Response } from 'superagent';
import User from '../database/models/user';
import Team from '../database/models/team';
// import { response } from 'express';
import service from '../service/login-service'
import TeamsService from '../service/teams-service';
chai.use(chaiHttp);

const { expect } = chai;

const url = 'http://localhost:3001';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NTkzNjE5NDYsImV4cCI6MTY1OTM2OTE0Nn0.T8LDlmYlLQ_6N9ZCapm7s7JSdSm_T-zdsXDbIF9lg9s';

const teamsService = new TeamsService();

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

describe('Testes em Teams', () => {
  describe('', () => {
    beforeEach(async () => {
      sinon.stub(Team, 'findAll').resolves([
        {
            "id": 1,
            "teamName": "Avaí/Kindermann"
        },
        {
            "id": 2,
            "teamName": "Bahia"
        },
        {
            "id": 3,
            "teamName": "Botafogo"
        },
        {
            "id": 4,
            "teamName": "Corinthians"
        },
        {
            "id": 5,
            "teamName": "Cruzeiro"
        },
        {
            "id": 6,
            "teamName": "Ferroviária"
        },
        {
            "id": 7,
            "teamName": "Flamengo"
        },
        {
            "id": 8,
            "teamName": "Grêmio"
        },
        {
            "id": 9,
            "teamName": "Internacional"
        },
        {
            "id": 10,
            "teamName": "Minas Brasília"
        },
        {
            "id": 11,
            "teamName": "Napoli-SC"
        },
        {
            "id": 12,
            "teamName": "Palmeiras"
        },
        {
            "id": 13,
            "teamName": "Real Brasília"
        },
        {
            "id": 14,
            "teamName": "Santos"
        },
        {
            "id": 15,
            "teamName": "São José-SP"
        },
        {
            "id": 16,
            "teamName": "São Paulo"
        }
    ] as any)
    });
    
    afterEach(() => {
      (Team.findAll as sinon.SinonStub).restore();
    });
    
    it('se retorna um array com os times', async () => {
      await chai
      .request(url)
      .get('/teams')
      .then((response) => {
        expect(response.ok).to.be.true;
        expect(response.body).to.be.an('array');
      });
    });
    
    it('se a função "getAllTeams" retorna um array de objetos', async () => {
      await teamsService.getAllTeams()
      .then((response) => {
        expect(response).to.be.an('array');
        expect(response).to.has.length(16);
        expect(response[0]).to.deep.equal({
          "id": 1,
          "teamName": "Avaí/Kindermann"
        });
      })
    });
  });

  describe('Testa função "getTeamById"', () => {
    beforeEach( async () => {
      sinon
        .stub(Team, 'findByPk')
        .resolves({
          "id": 1,
          "teamName": "Avaí/Kindermann"
        } as any)
    });

    afterEach(() => {
      (Team.findByPk as sinon.SinonStub).restore();
    });

    it('se retorna um time pelo seu id', async () => {
      await teamsService.getTeamById(1)
        .then((response) => {
          expect(response).to.deep.equal({
            "id": 1,
            "teamName": "Avaí/Kindermann"
          });
        })
    });
  });

  describe('Testa função "getTeamById"', () => {
    beforeEach( async () => {
      sinon
        .stub(Team, 'findByPk')
        .resolves(null);
    })
    
    afterEach(() => {
      (Team.findByPk as sinon.SinonStub).restore();
    });
    
    it('quando o time não existe', async () => {
      await teamsService.getTeamById(999)
      .then((response) => {
        expect(response).haveOwnProperty('message', 'Email ou senha inválidos!')
      })
    });
  });
});
