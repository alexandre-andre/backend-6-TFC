const queryAtHome = `
  SELECT
    t.team_name AS name,
    SUM(
      3*(m.home_team_goals > m.away_team_goals) + (m.home_team_goals = m.away_team_goals)
    ) AS totalPoints,
    COUNT(*) AS totalGames,
    SUM(m.home_team_goals > m.away_team_goals) AS totalVictories,
    SUM(m.home_team_goals = m.away_team_goals) AS totalDraws,
    SUM(m.home_team_goals < m.away_team_goals) AS totalLosses,
    SUM(m.home_team_goals) AS goalsFavor,
    SUM(m.away_team_goals) AS goalsOwn,
    SUM(m.home_team_goals - m.away_team_goals) AS goalsBalance,
    FORMAT(
      (
        SUM(3*(m.home_team_goals > m.away_team_goals) + (m.home_team_goals = m.away_team_goals))
        / (COUNT(*) * 3)
      ) * 100
    ,2) AS efficiency
  FROM matches AS m
  INNER JOIN teams AS t
  ON m.home_team = t.id
  GROUP BY name
  ORDER BY
  totalPoints DESC,
  goalsBalance DESC,
  goalsFavor DESC;
`;

const queryWhenVisitor = `
  SELECT
    t.team_name AS name,
    SUM(
      3*(m.away_team_goals > m.home_team_goals) + (m.away_team_goals = m.home_team_goals)
    ) AS totalPoints,
    COUNT(*) AS totalGames,
    SUM(m.away_team_goals > m.home_team_goals) AS totalVictories,
    SUM(m.away_team_goals = m.home_team_goals) AS totalDraws,
    SUM(m.away_team_goals < m.home_team_goals) AS totalLosses,
    SUM(m.away_team_goals) AS goalsFavor,
    SUM(m.home_team_goals) AS goalsOwn,
    SUM(m.away_team_goals - m.home_team_goals) AS goalsBalance,
    FORMAT(
      (
        SUM(3*(m.away_team_goals > m.home_team_goals) + (m.away_team_goals = m.home_team_goals))
        / (COUNT(*) * 3)
      ) * 100
    ,2) AS efficiency
  FROM matches AS m
  INNER JOIN teams AS t
  ON m.away_team = t.id
  GROUP BY name
  ORDER BY
  totalPoints DESC,
  goalsBalance DESC,
  goalsFavor DESC;
`;

export { queryAtHome, queryWhenVisitor };
