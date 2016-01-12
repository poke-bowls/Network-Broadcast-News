'use strict'

var Net = require( 'net' );

var sockets = [];

const Server = Net.createServer( function( client ) {

  client.write('WELCOME TO CATFISH!\n');

  //push new clients that connect to server to array 'sockets'
  sockets.push( client );

  //print the connected client to the terminal and any
  //other clients already c
  for( var k = 0; k < sockets.length; k++ ){
    if( sockets[k] !== client ){
        sockets[k].write( sockets[sockets.length - 1].remotePort + ' connected!\n' );
    }
  }

  process.stdin.on( 'data', function( data ) {
    console.log( 'Broadcast: ' + data.toString().trim() );
    var i = 0;
      while(  i < 1 ){

    for( var j = 0; j < sockets.length; j++ ){
      sockets[j].write( 'Broadcast: ' + data.toString().trim() + '\n' );
    }
      i++;
    }
  });

  console.log( 'Connected: ' + sockets[sockets.length - 1].remotePort );

  client.on( 'data', function( data ) {
    process.stdout.write( data.toString() );
    client.write( data.toString() );
    for( var j = 0; j < sockets.length; j++ ) {
      if( sockets[j] !== client ){
        sockets[j].write( data.toString() );
      }
    }
  });

  client.on( 'end', function() {
  // loop through array and remove the socket that's ended
    for( var i = 0; i < sockets.length; i++ ){
      console.log( sockets.length );
      console.log( 'Client: ' + client.remotePort + ' disconnected!' );
      sockets.splice( i, 1 );
    }
  });
});

  Server.listen(6969, function() {
    console.log('SERVER IS UP');
  });