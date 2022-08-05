import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Match from '../database/models/match';
import MatchService from '../service/matches-service';

import mockAllMatches from './mocks/matches';
import { mockMatchesInProgress } from './mocks/matchesInProgress';
import { mockMatchesFinisheds } from './mocks/machesFinisheds';

chai.use(chaiHttp);

const { expect } = chai;

const url = 'http://localhost:3001';

const matchesService = new MatchService();

describe('Testes em Matches', () => {

  describe('/matches', () => {
    beforeEach(async () => {
      sinon.stub(Match, 'findAll')
        .resolves(mockAllMatches as any);
    });

    afterEach(() => (Match.findAll as sinon.SinonStub).restore());

      it('retorna um array com todas as partidas', async () => {
      await chai.request(app)
      .get('/matches')
      .then((response) => {
          expect(response.ok).to.be.true;
          expect(response.body).to.deep.equals(mockAllMatches)
      });
    });
  });

  describe('/matches?inProgress=true', () => {
    beforeEach(async () => {
      sinon.stub(Match, 'findAll')
        .resolves(mockMatchesInProgress as any);
    });

    afterEach(() => (Match.findAll as sinon.SinonStub).restore());

    it('retorna um array com todas as partidas', async () => {
      await chai.request(app)
      .get('/matches?inProgress=true')
      .then((response) => {
        expect(response.ok).to.be.true;
        expect(response.body).to.deep.equals(mockMatchesInProgress)
      });
    });
  });

  describe('/matches?inProgress=false', () => {
    beforeEach(async () => {
      sinon.stub(Match, 'findAll')
        .resolves(mockMatchesFinisheds as any);
    });

    afterEach(() => (Match.findAll as sinon.SinonStub).restore());
    
    it('retorna um array com todas as partidas', async () => {
      await chai.request(app)
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

  describe('se a função "postMatch"', () => {
    beforeEach(async () => {
      sinon.stub(Match, 'create')
        .resolves({
          'id': '49',
          'homeTeam': '16',
          'homeTeamGoals': '2',
          'awayTeam': '8',
          'awayTeamGoals': '2',
          'inProgress': true
      } as any);
    });

    afterEach(() => {
      (Match.create as sinon.SinonStub).restore();
    });

    it('retorna uma partida criada', async () => {
      await matchesService.postMatch({
        'homeTeam': '16',
        'awayTeam': '8',
        'homeTeamGoals': '2',
        'awayTeamGoals': '2'
      } as any)
        .then((response) => {
          expect(response).to.deep.equal({
            'id': '49',
            'homeTeam': '16',
            'homeTeamGoals': '2',
            'awayTeam': '8',
            'awayTeamGoals': '2',
            'inProgress': true
        });
        })
    });
  });

  describe('se a função "finishMatch"', () => {
    beforeEach(async () => {
      sinon.stub(Match, 'update').resolves([1] as any);
    });

    afterEach(() => {
      (Match.update as sinon.SinonStub).restore();
    });

    it('retorna a mensagem "Finished" quando a partida for finalizada', async () => {
      await matchesService.finishMatch('49')
        .then((response) => {
          expect(response).to.deep.equal({ 'message': 'Finished' });
        })
    });
  });

  // describe('se a função "finishMatch"', () => {
  //   beforeEach(async () => {
  //     sinon.stub(Match, 'update').resolves([] as any);
  //   });

  //   afterEach(() => {
  //     (Match.update as sinon.SinonStub).restore();
  //   });

  //   it('lança uma exceção quando a partida não existe', async () => {
  //     await matchesService
  //       .finishMatch('999')
  //       .then((response) => {
  //         expect(response.message).to.be.equal('Match not found');
  //     });
  //   });
  // });
});

