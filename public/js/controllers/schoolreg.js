'use strict';



angular.module('yogaalliance')
    .controller('SchoolRegCtrl', function ($scope, $http) {
    $scope.createSchool = function () {
       var data = $.param({
            name: $scope.schoolName,
            owner: $scope.ownerName,
            qual: $scope.qualify,
            add: $scope.address,
            tnc: $scope.TandC,
            pcode: $scope.postCode,
            tel: $scope.tel,
            fax: $scope.fax,
            mail: $scope.email,
            web: $scope.website,
            desc: $scope.desc,
            ylink: $scope.youtubelink,
            logo: $scope.logo
        });
        $scope.putschool = true;
        $http.post('/putschool?' + data)
            .then(function (result) {
                $scope.putschool = false;
                $scope.regis = true;
                $scope.sid = result.data.insertId;
                console.log(result.data.insertId);
            });
        }
    $scope.opts = {
        env: 'production',
        client: {
            sandbox:    'AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL',
            production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
        },
        payment: function() {
            var env    = this.props.env;
            var client = this.props.client;
            return paypal.rest.payment.create(env, client, {
                transactions: [
                    {
                        amount: { total: '1.00', currency: 'USD' }
                    }
                ]
            });
        },
        commit: true, // Optional: show a 'Pay Now' button in the checkout flow
        onAuthorize: function(data, actions) {
            // Optional: display a confirmation page here
            return actions.payment.execute().then(function() {
                // Show a success page to the buyer
            });
        }
    };

    });

