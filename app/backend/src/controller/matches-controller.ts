import MatchesService from '../service/matches-service';

class MatchesController {
  private _matchesServices: MatchesService;

  constructor() {
    this._matchesServices = new MatchesService();
  }
}

export default MatchesController;
