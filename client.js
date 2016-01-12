'use strict'

var Net = require( 'net' );
//server is actually this client

    process.stdout.write( 'What shall I hail thee?\n' );

    let user = null;
    let connection = false;
    let Server = null;

    process.stdin.on( 'data', function( data ) {
      if ( user === null ) {
        user = data.toString().trim();
        connection = true;
      }

//run this code after setting a username
      if( connection === true ) {
        connection = false;
        const Server = Net.connect( {host: 'localhost', port: 6969}, function() {
          console.log( connection );
            Server.setEncoding( 'utf8' );

            process.stdin.on( 'data', function( data ) {
              Server.write( user + ': ' + data );
            });

            Server.on('data', function( data ) {
              process.stdout.write( '\n' + data );
            });
          });
      }
    });