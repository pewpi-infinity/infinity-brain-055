load('api_rpc.js');
load('api_shadow.js');

RPC.addHandler('Reveal', function() {
  print('Node 055 activates: don't drive');
  return {phase: 1.55664};
});

print('Mongoose OS Brain 055 online – hydrogen valve ready');
