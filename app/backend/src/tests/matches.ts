import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import Match from '../database/models/match';
import MatchService from '../service/matches-service';

import mockAllMatches from './mocks/matches';
import { mockMatchesInProgress } from './mocks/matchesInProgress';
import { mockMatchesFinisheds } from './mocks/machesFinisheds';

chai.use(chaiHttp);

const { expect } = chai;

const url = 'http://localhost:3001';

const matchesService = new MatchService();

describe('Testa MatchesServices', () => {

  describe('/matches', () => {
      it('retorna um array com todas as partidas', async () => {
      await chai.request(url)
      .get('/matches')
      .then((response) => {
          expect(response.ok).to.be.true;
          expect(response.body).to.deep.equals(mockAllMatches)
      });
    });
  });

  describe('/matches?inProgress=true', () => {
    it('retorna um array com todas as partidas', async () => {
      await chai.request(url)
      .get('/matches?inProgress=true')
      .then((response) => {
        expect(response.ok).to.be.true;
        expect(response.body).to.deep.equals(mockMatchesInProgress)
      });
    });
  });

  describe('/matches?inProgress=false', () => {
    it('retorna um array com todas as partidas', async () => {
      await chai.request(url)
      .get('/matches?inProgress=false')
      .then((response) => {
        expect(response.ok).to.be.true;
        expect(response.body).to.deep.equals(mockMatchesFinisheds)
      });
    });
  });

  describe('matches service, se a função "getAllMatches" retorna um array com as partidas', () => {
    beforeEach(async () => {
      sinon.stub(Match, 'findAll')
        .resolves(mockAllMatches as any);
    });

    afterEach(() => (Match.findAll as sinon.SinonStub).restore());

    it('retorna um array de objetos', async () => {
      await matchesService.getAllMatches()
        .then((response) => {
          expect(response).to.deep.equals(mockAllMatches)
      });
    });
  });

  describe('matche service, se a função "getMatchesInProgress" quando recebe "true"', () => {
    beforeEach(async () => {
      sinon.stub(Match, 'findAll')
        .resolves(mockMatchesInProgress as any);
    });

    afterEach(() => (Match.findAll as sinon.SinonStub).restore());

    it('retorna um array somente com as partidas ainda em andamento', async () => {
      await matchesService.getMatchesInProgress('true')
        .then((response) => {
          expect(response).to.deep.equal(mockMatchesInProgress);
        });
    })
  });

  describe('matche service, se a função "getMatchesInProgress" quando recebe "false"', () => {
    beforeEach(async () => {
      sinon.stub(Match, 'findAll')
        .resolves(mockMatchesFinisheds as any);
    });

    afterEach(() => (Match.findAll as sinon.SinonStub).restore());

    it('retorna um array somente com as partidas ainda em andamento', async () => {
      await matchesService.getMatchesInProgress('false')
        .then((response) => {
          expect(response).to.deep.equal(mockMatchesFinisheds);
        });
    })
  });
});

