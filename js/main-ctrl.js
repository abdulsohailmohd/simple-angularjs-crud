var app = angular.module("myApp", []);

app.controller("main-ctrl", function ($scope) {

    // Init
    $scope.userdata = [{ name: "Sohail", area: "Hyd"},{ name: "XYZ", area: "Hyd"}];
    $scope.name = "";
    $scope.area = "";
    $scope.index;

    $scope.add = function(){
        let ele = {
            name: $scope.name,
            area: $scope.area
        };
        $scope.userdata.push(ele);

        $('#myModal').modal('hide');

        $scope.resetModel();
    };

    $scope.delete = function(x){
        $scope.userdata.splice(x,1);
    };
    
    $scope.edit = function(x){
        $scope.index = x;
        $scope.name = $scope.userdata[x].name;
        $scope.area = $scope.userdata[x].area;
        $('#editModal').modal('show');
    };
    $scope.update = function(){
        let ele = {
            name: $scope.name,
            area: $scope.area
        };
        $scope.userdata.splice($scope.index,1,ele);
        $('#editModal').modal('hide');
        $scope.resetModel();
    }
    $scope.resetModel = function(){
        $scope.name = "";
        $scope.area = "";
    };
});