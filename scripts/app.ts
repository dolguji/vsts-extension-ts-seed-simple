import Q = require("q");

import TFS_Wit_Client = require("TFS/WorkItemTracking/RestClient");
import TFS_Wit_Contracts = require("TFS/WorkItemTracking/Contracts");
import RestClient = require("TFS/Work/RestClient");
import Work_Contracts = require("TFS/Work/Contracts");
import TFS_Core_Contracts = require("TFS/Core/Contracts");


function getBoardColumns(teamContext: TFS_Core_Contracts.TeamContext, board: string) {
    var restClient = RestClient.getClient();
    restClient.getBoardColumns(teamContext, board).then((boardRefs: Work_Contracts.BoardColumn[]) => {
        // do something
    });
}

function getBoards() {
    var restClient = RestClient.getClient();
    var context = VSS.getWebContext();
    
    var teamContext: TFS_Core_Contracts.TeamContext = {
        projectId: context.project.id,
        project: context.project.name,
        teamId: context.team.id,
        team: context.team.name
    }
    
    restClient.getBoards(teamContext).then((boardRefs: Work_Contracts.BoardReference[]) => {
        alert("First boardReference " + boardRefs[0].name);
    });
}