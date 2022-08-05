import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Team from '../database/models/team';
import TeamsService from '../service/teams-service';
import { mockAllTeams } from './mocks/allTeams';

chai.use(chaiHttp);

const { expect } = chai;

const url = 'http://localhost:3001';

const teamsService = new TeamsService();

describe('Testes em Teams', () => {
  describe('GET /teams', () => {
    beforeEach(async () => {
      sinon.stub(Team, 'findAll').resolves(mockAllTeams as any)
    });
    
    afterEach(() => {
      (Team.findAll as sinon.SinonStub).restore();
    });
    
    it('se retorna um array com os times', async () => {
      await chai
      .request(app)
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

  describe('GET /teams/:id', () => {
    beforeEach(async () => {
      sinon
        .stub(Team, 'findByPk')
        .resolves({
          "id": 1,
          "teamName": "Avaí/Kindermann"
        } as any);
    });
    
    afterEach(() => {
      (Team.findByPk as sinon.SinonStub).restore();
    });
    
    it('se retorna um array com os times', async () => {
      await chai
      .request(app)
      .get('/teams/1')
      .then((response) => {
        expect(response.ok).to.be.true;
        expect(response.body).to.deep.equal({
          "id": 1,
          "teamName": "Avaí/Kindermann"
        });
      });
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
        expect(response).haveOwnProperty('message', 'This team was not found')
      })
    });
  });
});
