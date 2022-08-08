const queryAtHome = `
  SELECT
    t.team_name AS name,
    CAST(SUM(
      3*(m.home_team_goals > m.away_team_goals) + (m.home_team_goals = m.away_team_goals)
    ) AS SIGNED) AS totalPoints,
    COUNT(*) AS totalGames,
    CAST(SUM(m.home_team_goals > m.away_team_goals) AS SIGNED) AS totalVictories,
    CAST(SUM(m.home_team_goals = m.away_team_goals) AS SIGNED) AS totalDraws,
    CAST(SUM(m.home_team_goals < m.away_team_goals) AS SIGNED) AS totalLosses,
    CAST(SUM(m.home_team_goals) AS SIGNED) AS goalsFavor,
    CAST(SUM(m.away_team_goals) AS SIGNED) AS goalsOwn,
    CAST(SUM(m.home_team_goals - m.away_team_goals) AS SIGNED) AS goalsBalance,
    CAST(FORMAT(
      (
        SUM(3*(m.home_team_goals > m.away_team_goals) + (m.home_team_goals = m.away_team_goals))
        / (COUNT(*) * 3)
      ) * 100
    ,2) AS DOUBLE) AS efficiency
  FROM matches AS m
  INNER JOIN teams AS t
  ON m.home_team = t.id
  WHERE m.in_progress = false
  GROUP BY name
  ORDER BY
  totalPoints DESC,
  goalsBalance DESC,
  goalsFavor DESC;
`;

const queryWhenVisitor = `
  SELECT
    t.team_name AS name,
    CAST(SUM(
      3*(m.away_team_goals > m.home_team_goals) + (m.away_team_goals = m.home_team_goals)
    ) AS SIGNED) AS totalPoints,
    COUNT(*) AS totalGames,
    CAST(SUM(m.away_team_goals > m.home_team_goals) AS SIGNED) AS totalVictories,
    CAST(SUM(m.away_team_goals = m.home_team_goals) AS SIGNED) AS totalDraws,
    CAST(SUM(m.away_team_goals < m.home_team_goals) AS SIGNED) AS totalLosses,
    CAST(SUM(m.away_team_goals) AS SIGNED) AS goalsFavor,
    CAST(SUM(m.home_team_goals) AS SIGNED) AS goalsOwn,
    CAST(SUM(m.away_team_goals - m.home_team_goals) AS SIGNED) AS goalsBalance,
    CAST(FORMAT(
      (
        SUM(3*(m.away_team_goals > m.home_team_goals) + (m.away_team_goals = m.home_team_goals))
        / (COUNT(*) * 3)
      ) * 100
    ,2) AS DOUBLE) AS efficiency
  FROM matches AS m
  INNER JOIN teams AS t
  ON m.away_team = t.id
  WHERE m.in_progress = false
  GROUP BY name
  ORDER BY
  totalPoints DESC,
  goalsBalance DESC,
  goalsFavor DESC;
`;

export { queryAtHome, queryWhenVisitor };
