var Stream = require( 'stream' );
var Net = require( 'net' );

const Server = Net.createServer( function( client ) {
  client.write('WELCOME TO CATFISH!\n');
  client.write( 'Server listening on localhost:6969' );

  client.on( 'data', function( data ) {
    process.stdout.write( 'poke_bowls: ' + data.toString() );
    client.write( 'poke_bowls: ' + data.toString() );
  });
  });

  Server.listen(6969, function() {
    console.log('SERVER IS UP');
  });