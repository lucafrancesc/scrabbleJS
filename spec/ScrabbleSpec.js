'use strict';

describe('Scrabble', function() {

  var game;

  beforeEach(function(){
    game = new Scrabble();
  });

  it('counts the point', function(){
    expect(game.points('n')).toEqual(1);
  });

  it('counts the point', function(){
    expect(game.points('qza')).toEqual(21);
  });


});
