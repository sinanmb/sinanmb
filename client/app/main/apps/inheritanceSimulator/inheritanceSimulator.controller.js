'use strict';

angular.module('sinanmbApp')
  .controller('InheritancesimulatorCtrl', function ($scope) {

    $scope.maxSoulte = 0.5;

    $scope.realties = [
      {
        id: 0,
        name: 'Ecole Guessous les Orangers',
        value: 40
      },
      {
        id: 1,
        name: 'Ecole Guessous Soussi',
        value: 25
      },
      {
        id: 2,
        name: 'Ronzade',
        value: 23
      },
      {
        id: 3,
        name: 'Mady1',
        value: 6
      },
      {
        id: 4,
        name: 'Mady2',
        value: 6
      },
      {
        id: 5,
        name: 'Rue Meknes',
        value: 4
      },
      {
        id: 6,
        name: 'TF 4155',
        value: 3.16
      },
      {
        id: 7,
        name: 'TF 1080',
        value: 7
      },
      {
        id: 8,
        name: 'TF 846/1',
        value: 15
      }
    ];

    $scope.people = [
      {
        id: 0,
        name: 'Sinan',
        parts: 0,
        realties: []
      },
      {
        id: 1,
        name: 'Anis',
        parts: 0,
        realties: []
      },
      {
        id: 2,
        name: 'Souad',
        parts: 0,
        realties: []
      },
      {
        id: 3,
        name: 'Leila',
        parts: 0,
        realties: []
      },
      {
        id: 4,
        name: 'Amina',
        parts: 0,
        realties: []
      }
    ];

    function allocateInheritanceParts () {

      var k, l = null;
      for (var i = 0, j = $scope.realties.length; i < j; i++) {
        // Custom repartition for Ronzade
        if ($scope.realties[i].id === 0) {
          for (k = 0, l = $scope.people.length; k < l; k++) {
            switch ($scope.people[k].id) {
              case 0: // Sinan
                $scope.people[k].parts += 8/48 * $scope.realties[i].value;
                break;
              case 1: // Anis
                $scope.people[k].parts += 16/48 * $scope.realties[i].value;
                break;
              case 2: // Souad
                $scope.people[k].parts += 22/48 * $scope.realties[i].value;
                break;
              case 3: // Leila
                $scope.people[k].parts += 1/48 * $scope.realties[i].value;
                break;
              case 4: // Amina
                $scope.people[k].parts += 1/48 * $scope.realties[i].value;
                break;
            }
          }
        } else { // Generic repartition
          for (k = 0, l = $scope.people.length; k < l; k++) {
            switch ($scope.people[k].id) {
              case 0: // Sinan
                $scope.people[k].parts += 4/24 * $scope.realties[i].value;
                break;
              case 1: // Anis
                $scope.people[k].parts += 8/24 * $scope.realties[i].value;
                break;
              case 2: // Souad
                $scope.people[k].parts += 4/24 * $scope.realties[i].value;
                break;
              case 3: // Leila
                $scope.people[k].parts += 4/24 * $scope.realties[i].value;
                break;
              case 4: // Amina
                $scope.people[k].parts += 4/24 * $scope.realties[i].value;
                break;
            }
          }
        }
      }
    }

    function calculateTotalParts(people) {
      $scope.totalParts = 0;

      for (var i = 0, j = people.length; i < j; i++) {
        people[i].parts = Math.ceil(people[i].parts * 100) / 100;
        $scope.totalParts += people[i].parts;
      }
    }

    function distributeRealties(maxSoulte) {

      var distributedRealties = {
        men: {
          list: [],
          totalValue: 0
        },
        women: {
          list: [],
          totalValue: 0
        },
        undivided: {
          list: [],
          totalValue: 0
        }
      };

      for (var i = 0, j = $scope.realties.length; i < j; i++) {
        var randomIndex = Math.floor(Math.random() * 5);

        if (randomIndex < 2) {
          if ($scope.people[0].parts + $scope.people[1].parts + (maxSoulte * 2) > distributedRealties.men.totalValue + $scope.realties[i].value) {
            distributedRealties.men.list.push($scope.realties[i]);
            distributedRealties.men.totalValue +=$scope.realties[i].value;
          } else if ($scope.people[2].parts + $scope.people[3].parts + $scope.people[4].parts + (maxSoulte * 3) > distributedRealties.women.totalValue + $scope.realties[i].value) {
            distributedRealties.women.list.push($scope.realties[i]);
            distributedRealties.women.totalValue +=$scope.realties[i].value;
          }
          else {
            distributedRealties.undivided.list.push($scope.realties[i]);
            distributedRealties.undivided.totalValue +=$scope.realties[i].value;
          }
        } else if (randomIndex >= 2) {
          if ($scope.people[2].parts + $scope.people[3].parts + $scope.people[4].parts + (maxSoulte * 3) > distributedRealties.women.totalValue + $scope.realties[i].value) {
            distributedRealties.women.list.push($scope.realties[i]);
            distributedRealties.women.totalValue +=$scope.realties[i].value;
          }
          else if ($scope.people[0].parts + $scope.people[1].parts + (maxSoulte * 2) > distributedRealties.men.totalValue + $scope.realties[i].value) {
            distributedRealties.men.list.push($scope.realties[i]);
            distributedRealties.men.totalValue +=$scope.realties[i].value;
          }
          else {
            distributedRealties.undivided.list.push($scope.realties[i]);
            distributedRealties.undivided.totalValue +=$scope.realties[i].value;
          }
        }
      }

      distributedRealties.men.totalParts = $scope.people[0].parts + $scope.people[1].parts;
      distributedRealties.women.totalParts = $scope.people[2].parts + $scope.people[3].parts + $scope.people[3].parts;

      console.log ('distributedRealties: ', distributedRealties);
      $scope.distributedRealties = distributedRealties;
    }

    function resetParts() {
      // Reset parts
      _.forEach($scope.people, function (person) {
        person.parts = 0;
        person.realties = [];
      });
    }

    // Init
    allocateInheritanceParts();
    calculateTotalParts($scope.people);
    distributeRealties($scope.maxSoulte);

    $scope.calculate = function () {
      // Init
      resetParts();
      allocateInheritanceParts();
      calculateTotalParts($scope.people);
      distributeRealties($scope.maxSoulte);
    };

    $scope.$watch('realties', function (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        $scope.distributedRealties.men = $scope.distributedRealties.women = $scope.distributedRealties.undivided = [];
      }
    }, true);

  });
