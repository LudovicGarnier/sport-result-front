import { NbaSeasonDto } from "./nba-season-dto"
import { NbaTeamDto } from "./nba-team-dto"

export interface NbaStandingsDto {
    seasonDto: NbaSeasonDto,
    nbaTeamDto: NbaTeamDto,
    conferenceName: string,
    conferenceRank: number,
    conferenceWin: number,
    conferenceLoss: number,
    divisionName: string,
    divisionRank: number,
    divisionWin: number,
    divisionLoss: number,
    winHome: number,
    winAway: number,
    winTotal: number,
    winPercentage: string,
    lastTenWin: number,
    lossHome: number,
    lossAway: number,
    lossTotal: number,
    lossPercentage: string,
    lastTenLoss: number,
    gameBehind: string,
    streak: number
}
