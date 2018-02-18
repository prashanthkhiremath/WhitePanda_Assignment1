angular.module('trixEditorApp').service('sharedService',sharedService);

function sharedService($http,URL) {
    return {
        saveDocService : saveDocService,
        viewDocService : viewDocService
    }

    function viewDocService() {
        return $http.get(URL+"editor").then(complete).catch(failed);
    }

    function saveDocService(textData) {
        return $http.post(URL+"editor", textData).then(complete).catch(failed);
    }

    function complete(response) {
        return response;
    }

    function failed(error) {
        console.log(error.statusText);
    }
    
    
}