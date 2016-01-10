var Net = require( 'net' );
//server is actually this client
const Server = Net.connect( {host: 'localhost', port: 6969}, function() {
    Server.on( 'data', function( data ){
      // Server.write( 'Client connected' );
    });

    process.stdin.setEncoding( 'utf8' );
    process.stdout.setEncoding( 'utf8' );

    Server.setEncoding( 'utf8' );

    process.stdout.write( 'poke_bowls: ' );

    process.stdin.on( 'data', function( data ) {
      Server.write( data );

    });


  Server.on('data', function( data ) {
    process.stdout.write( '\r' + data + '\npoke_bowls: ' );
  });
});