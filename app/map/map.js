// angular.module('brewery')
// 	.controller('MapCtrl',function ($scope,$window,$location) {
		var brewState = {
      "type": "FeatureCollection",
      "features": [
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "NorthGate Brewing ",
   "beer": "Get Together"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "NorthGate Brewing ",
   "beer": "Maggie's Leap"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "NorthGate Brewing ",
   "beer": "Wall's End"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "NorthGate Brewing ",
   "beer": "Pumpion"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "NorthGate Brewing ",
   "beer": "Stronghold"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "NorthGate Brewing ",
   "beer": "Parapet ESB"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "Citra Ass Down"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "London Balling"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "35 K"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "A Beer"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "Rules are Rules"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "Flesh Gourd'n"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "Sho'nuff"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "Bloody Show"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "Rico Sauvin"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "Coq de la Marche"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "Kamen Knuddeln"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "Pile of Face"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against the Grain Brewery",
   "beer": "The Brown Note"
 },
 {
   "city": "Framingham",
   "state": " MA",
   "brewery": "Jack's Abby Craft Lagers",
   "beer": "House Lager"
 },
 {
   "city": "Framingham",
   "state": " MA",
   "brewery": "Jack's Abby Craft Lagers",
   "beer": "Leisure Time"
 },
 {
   "city": "Framingham",
   "state": " MA",
   "brewery": "Jack's Abby Craft Lagers",
   "beer": "Excess IPL"
 },
 {
   "city": "Framingham",
   "state": " MA",
   "brewery": "Jack's Abby Craft Lagers",
   "beer": "Hoponius Union"
 },
 {
   "city": "Framingham",
   "state": " MA",
   "brewery": "Jack's Abby Craft Lagers",
   "beer": "Calyptra"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Mike Hess Brewing Company",
   "beer": "Habitus (2014)"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Mike Hess Brewing Company",
   "beer": "Solis"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Mike Hess Brewing Company",
   "beer": "Jucundus"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Mike Hess Brewing Company",
   "beer": "Habitus"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Mike Hess Brewing Company",
   "beer": "Grazias"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Mike Hess Brewing Company",
   "beer": "Claritas"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Fort Point Beer Company",
   "beer": "Park"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Fort Point Beer Company",
   "beer": "Westfalia"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Fort Point Beer Company",
   "beer": "KSA"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Fort Point Beer Company",
   "beer": "Villager"
 },
 {
   "city": "Charleston",
   "state": " SC",
   "brewery": "COAST Brewing Company",
   "beer": "Blackbeard"
 },
 {
   "city": "Charleston",
   "state": " SC",
   "brewery": "COAST Brewing Company",
   "beer": "Rye Knot"
 },
 {
   "city": "Charleston",
   "state": " SC",
   "brewery": "COAST Brewing Company",
   "beer": "Dead Arm"
 },
 {
   "city": "Charleston",
   "state": " SC",
   "brewery": "COAST Brewing Company",
   "beer": "32°/50° Kölsch "
 },
 {
   "city": "Charleston",
   "state": " SC",
   "brewery": "COAST Brewing Company",
   "beer": "HopArt"
 },
 {
   "city": "Charleston",
   "state": " SC",
   "brewery": "COAST Brewing Company",
   "beer": "Boy King"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Great Divide Brewing Company",
   "beer": "Denver Pale Ale (Artist Series No. 1)"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Great Divide Brewing Company",
   "beer": "Hibernation Ale"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Great Divide Brewing Company",
   "beer": "Whitewater"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Great Divide Brewing Company",
   "beer": "Rumble"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Great Divide Brewing Company",
   "beer": "Orabelle"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Great Divide Brewing Company",
   "beer": "Lasso"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Great Divide Brewing Company",
   "beer": "Yeti  Imperial Stout"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Great Divide Brewing Company",
   "beer": "Colette"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Great Divide Brewing Company",
   "beer": "Titan IPA"
 },
 {
   "city": "Bridgman",
   "state": " MI",
   "brewery": "Tapistry Brewing",
   "beer": "Peck's Porter"
 },
 {
   "city": "Bridgman",
   "state": " MI",
   "brewery": "Tapistry Brewing",
   "beer": "Reactor"
 },
 {
   "city": "Bridgman",
   "state": " MI",
   "brewery": "Tapistry Brewing",
   "beer": "Mr. Orange"
 },
 {
   "city": "Holland",
   "state": " MI",
   "brewery": "Big Lake Brewing",
   "beer": "Dark Star"
 },
 {
   "city": "Holland",
   "state": " MI",
   "brewery": "Big Lake Brewing",
   "beer": "Ryecoe"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "The Mitten Brewing Company",
   "beer": "G. B. Russo’s Italian Pistachio Pale Ale"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Belfort"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Star Runner"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Tart Side of the Barrel"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Linnaeus Mango IPA"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Beasts A'Burnin'"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Verdun"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Barrel Aged Triomphe"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Cherry Doppelbock"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Tropical Saison"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Beach Patrol"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Nuit Serpent"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Paris"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "The Grand Army"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Acidulated Trip"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Root Stock"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Mind Games"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Sous Chef"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Dubbelicious"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Psychopomp"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Fat Paczki"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Earth-Like Planets"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Ski Patrol"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Viking Ice Hole"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Rye Porter"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Wizard Burial Ground"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Smoky Wheat"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "BRIPA"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Mela"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "W.I.P.A Snappa"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Pepper in the Rye"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Moe Lasses'"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Pumpkin Tart"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Undertaker"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Undertaker (2014)"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Coq D'Or"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "North French"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Agent a Deux"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Belgian Wit"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Pothole Stout"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Tree Bucket"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Le Flaneur Ale"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Maize & Blueberry"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Trebuchet Double IPA"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Contemplation"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Black Rabbit"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Zaison"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Vivant Tripel"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Tart Side of the Moon"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Big Red Coq"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Hubris Quadrupel Anniversary Ale"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Plow Horse Belgian Style Imperial Stout"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Escoffier Bretta Ale"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Contemplation (2012)"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Vivant Belgian Style Imperial Stout (2012)"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Big Red Coq (2012)"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Zaison (2012)"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Vivant Tripel (2012)"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Trebuchet Double IPA (2012)"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Kludde"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Farm Hand"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Solitude"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Brewery Vivant",
   "beer": "Triomphe"
 },
 {
   "city": "Petoskey",
   "state": " MI",
   "brewery": "Petoskey Brewing",
   "beer": "Sparkle"
 },
 {
   "city": "Petoskey",
   "state": " MI",
   "brewery": "Petoskey Brewing",
   "beer": "North 45 Amber Ale"
 },
 {
   "city": "Petoskey",
   "state": " MI",
   "brewery": "Petoskey Brewing",
   "beer": "Horny Monk"
 },
 {
   "city": "Petoskey",
   "state": " MI",
   "brewery": "Petoskey Brewing",
   "beer": "Mind's Eye PA"
 },
 {
   "city": "Marquette",
   "state": " MI",
   "brewery": "Blackrocks Brewery",
   "beer": "Nordskye "
 },
 {
   "city": "Marquette",
   "state": " MI",
   "brewery": "Blackrocks Brewery",
   "beer": "North Third Stout"
 },
 {
   "city": "Marquette",
   "state": " MI",
   "brewery": "Blackrocks Brewery",
   "beer": "Honey Lav"
 },
 {
   "city": "Marquette",
   "state": " MI",
   "brewery": "Blackrocks Brewery",
   "beer": "Coconut Brown Ale"
 },
 {
   "city": "Marquette",
   "state": " MI",
   "brewery": "Blackrocks Brewery",
   "beer": "51K IPA"
 },
 {
   "city": "Marquette",
   "state": " MI",
   "brewery": "Blackrocks Brewery",
   "beer": "Grand Rabbits"
 },
 {
   "city": "Comstock Park",
   "state": " MI",
   "brewery": "Perrin Brewing Company",
   "beer": "Hotbox Brown"
 },
 {
   "city": "Comstock Park",
   "state": " MI",
   "brewery": "Perrin Brewing Company",
   "beer": "Gold"
 },
 {
   "city": "Comstock Park",
   "state": " MI",
   "brewery": "Perrin Brewing Company",
   "beer": "Black"
 },
 {
   "city": "Comstock Park",
   "state": " MI",
   "brewery": "Perrin Brewing Company",
   "beer": "98 Problems (Cuz A Hop Ain't One)"
 },
 {
   "city": "Comstock Park",
   "state": " MI",
   "brewery": "Perrin Brewing Company",
   "beer": "Veteran’s Pale Ale (VPA)"
 },
 {
   "city": "Comstock Park",
   "state": " MI",
   "brewery": "Perrin Brewing Company",
   "beer": "Grapefruit IPA"
 },
 {
   "city": "South Lyon",
   "state": " MI",
   "brewery": "Witch's Hat Brewing Company",
   "beer": "Train Hopper"
 },
 {
   "city": "South Lyon",
   "state": " MI",
   "brewery": "Witch's Hat Brewing Company",
   "beer": "Edward’s Portly Brown"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Founders Brewing Company",
   "beer": "Dirty Bastard"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Founders Brewing Company",
   "beer": "Centennial IPA"
 },
 {
   "city": "Grand Rapids",
   "state": " MI",
   "brewery": "Founders Brewing Company",
   "beer": "All Day IPA"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Flat 12 Bierwerks",
   "beer": "Deflator"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Flat 12 Bierwerks",
   "beer": "Hinchtown Hammer Down"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Flat 12 Bierwerks",
   "beer": "Half Cycle IPA"
 },
 {
   "city": "Evansville",
   "state": " IN",
   "brewery": "Tin Man Brewing Company",
   "beer": "Cafe Leche"
 },
 {
   "city": "Evansville",
   "state": " IN",
   "brewery": "Tin Man Brewing Company",
   "beer": "Damascene Apricot Sour"
 },
 {
   "city": "Evansville",
   "state": " IN",
   "brewery": "Tin Man Brewing Company",
   "beer": "Csar"
 },
 {
   "city": "Evansville",
   "state": " IN",
   "brewery": "Tin Man Brewing Company",
   "beer": "Klingon Warnog Roggen Dunkel"
 },
 {
   "city": "Evansville",
   "state": " IN",
   "brewery": "Tin Man Brewing Company",
   "beer": "Overlord Imperial IPA"
 },
 {
   "city": "Evansville",
   "state": " IN",
   "brewery": "Tin Man Brewing Company",
   "beer": "Alloy"
 },
 {
   "city": "Evansville",
   "state": " IN",
   "brewery": "Tin Man Brewing Company",
   "beer": "Rivet Irish Red Ale"
 },
 {
   "city": "Evansville",
   "state": " IN",
   "brewery": "Tin Man Brewing Company",
   "beer": "3 Gear Robust Porter"
 },
 {
   "city": "Evansville",
   "state": " IN",
   "brewery": "Tin Man Brewing Company",
   "beer": "Circuit Bohemian Pilsner"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Black Acre Brewing Co.",
   "beer": "Saucy Intruder"
 },
 {
   "city": "Plainfield",
   "state": " IN",
   "brewery": "Brew Link Brewing",
   "beer": "Insert Hop Reference"
 },
 {
   "city": "Granger",
   "state": " IN",
   "brewery": "Bare Hands Brewery",
   "beer": "Thai.p.a"
 },
 {
   "city": "Martinsville",
   "state": " IN",
   "brewery": "Three Pints Brewing",
   "beer": "Citra Faced"
 },
 {
   "city": "Martinsville",
   "state": " IN",
   "brewery": "Three Pints Brewing",
   "beer": "Pole Barn Stout"
 },
 {
   "city": "Martinsville",
   "state": " IN",
   "brewery": "Three Pints Brewing",
   "beer": "Pale"
 },
 {
   "city": "Martinsville",
   "state": " IN",
   "brewery": "Three Pints Brewing",
   "beer": "Yoshi's Nectar"
 },
 {
   "city": "Valparaiso",
   "state": " IN",
   "brewery": "Four Fathers Brewing ",
   "beer": "Feel Like Maplin' Love"
 },
 {
   "city": "Valparaiso",
   "state": " IN",
   "brewery": "Four Fathers Brewing ",
   "beer": "Father's Beer"
 },
 {
   "city": "Valparaiso",
   "state": " IN",
   "brewery": "Four Fathers Brewing ",
   "beer": "The 26th"
 },
 {
   "city": "Valparaiso",
   "state": " IN",
   "brewery": "Four Fathers Brewing ",
   "beer": "The Gadget"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Indiana City Brewing",
   "beer": "Tribute"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "Wrath of Pele"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "Black Beer'd"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "Mr. Tea"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "Pale Alement"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "Hopkick Dropkick"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "Kreamed Corn"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "Coconoats"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "Joey Wheat"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "3:33 Black IPA"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "MCA"
 },
 {
   "city": "Michigan City",
   "state": " IN",
   "brewery": "Burn 'Em Brewing",
   "beer": "Pale Alement"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Tip Off"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Java Mac"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Cowbell"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Hop Up Offa That Brett (2014)"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "PV Muckle (2013)"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Bourbon Barrel Batch 666: Sympathy for the Devil"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Whip Fight"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Port Barrel Wee Mac "
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Fistful Of Hops Red"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Fistful of Hops Orange"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Fistful Of Hops Blue"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Fistful of Hops Green"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "30 Min Coma"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Wee Muckle"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Royal Brat"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Grapefruit Jungle (GFJ)"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Osiris Pale Ale"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Bourbon Barrel Aged Timmie"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Stupid Sexy Flanders"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Bourbon Barrel Cowbell"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Popcorn Pilsner"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Ring of Dingle"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Bourbon Barrel Wee Mac"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Bourbon Barrel Johan"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "The Deuce"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "The Velvet Fog"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Sun King Oktoberfest"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Indianapolis Indians Lager"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Indians Victory Lager (2012)"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Chaka"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Isis"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Wee Muckle (2011)"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Grapefruit Jungle (GFJ) (2011)"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Sun King Oktoberfest (2011)"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Johan the Barleywine"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Wee Mac Scottish-Style Ale"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Sunlight Cream Ale"
 },
 {
   "city": "Indianapolis",
   "state": " IN",
   "brewery": "Sun King Brewing Company",
   "beer": "Osiris Pale Ale (2010)"
 },
 {
   "city": "Mishawaka",
   "state": " IN",
   "brewery": "Evil Czech Brewery",
   "beer": "Blonde Czich"
 },
 {
   "city": "Mishawaka",
   "state": " IN",
   "brewery": "Evil Czech Brewery",
   "beer": "White Reaper"
 },
 {
   "city": "Mishawaka",
   "state": " IN",
   "brewery": "Evil Czech Brewery",
   "beer": "Bobblehead"
 },
 {
   "city": "Mishawaka",
   "state": " IN",
   "brewery": "Evil Czech Brewery",
   "beer": "Lucky Dog"
 },
 {
   "city": "Mishawaka",
   "state": " IN",
   "brewery": "Evil Czech Brewery",
   "beer": "Voodoo"
 },
 {
   "city": "Mishawaka",
   "state": " IN",
   "brewery": "Evil Czech Brewery",
   "beer": "General George Patton Pilsner"
 },
 {
   "city": "Columbus",
   "state": " IN",
   "brewery": "450 North Brewing Company",
   "beer": "Galaxyfest"
 },
 {
   "city": "Columbus",
   "state": " IN",
   "brewery": "450 North Brewing Company",
   "beer": "Citrafest"
 },
 {
   "city": "Columbus",
   "state": " IN",
   "brewery": "450 North Brewing Company",
   "beer": "Barn Yeti"
 },
 {
   "city": "Columbus",
   "state": " IN",
   "brewery": "450 North Brewing Company",
   "beer": "Scarecrow"
 },
 {
   "city": "Columbus",
   "state": " IN",
   "brewery": "450 North Brewing Company",
   "beer": "Ironman"
 },
 {
   "city": "Columbus",
   "state": " IN",
   "brewery": "450 North Brewing Company",
   "beer": "Honey Kolsch"
 },
 {
   "city": "Columbus",
   "state": " IN",
   "brewery": "450 North Brewing Company",
   "beer": "Copperhead Amber"
 },
 {
   "city": "Bargersville",
   "state": " IN",
   "brewery": "Taxman Brewing Company",
   "beer": "Deduction"
 },
 {
   "city": "Seven Points",
   "state": " TX",
   "brewery": "Cedar Creek Brewery",
   "beer": "Gone A-Rye"
 },
 {
   "city": "Seven Points",
   "state": " TX",
   "brewery": "Cedar Creek Brewery",
   "beer": "Special Release"
 },
 {
   "city": "Seven Points",
   "state": " TX",
   "brewery": "Cedar Creek Brewery",
   "beer": "Dankosaurus"
 },
 {
   "city": "Seven Points",
   "state": " TX",
   "brewery": "Cedar Creek Brewery",
   "beer": "Scruffy's Smoked Alt"
 },
 {
   "city": "Seven Points",
   "state": " TX",
   "brewery": "Cedar Creek Brewery",
   "beer": "Elliott's Phoned Home Pale Ale"
 },
 {
   "city": "Seven Points",
   "state": " TX",
   "brewery": "Cedar Creek Brewery",
   "beer": "The Lawn Ranger"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Sex Panther"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Winter Warmer (Vault Series)"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Count Hopula (Vault Series)"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Oktoberfest"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "SunSpot Golden Ale"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "I.W.A. (2011)"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Supermonk I.P.A."
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Epicenter Amber Ale"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "SanTan HefeWeizen"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Hop Shock IPA"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Sex Panther (2014)"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Devil’s Ale"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Rail Slide Imperial Spiced Ale"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Mr. Pineapple"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "American Idiot Ale (2012)"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Hop Shock IPA (2010)"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "SanTan HefeWeizen (2010)"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Devil’s Ale (2010)"
 },
 {
   "city": "Chandler",
   "state": " AZ",
   "brewery": "SanTan Brewing Company",
   "beer": "Epicenter Amber Ale (2010)"
 },
 {
   "city": "Kansas City",
   "state": " MO",
   "brewery": "Boulevard Brewing Company",
   "beer": "Heavy Lifting"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "James Page Brewing Company",
   "beer": "Bastian"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "James Page Brewing Company",
   "beer": "Healani"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "James Page Brewing Company",
   "beer": "Yabba Dhaba Chai Tea Porter"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "James Page Brewing Company",
   "beer": "A Capella Gluten Free Pale Ale"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "James Page Brewing Company",
   "beer": "Casper White Stout"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "James Page Brewing Company",
   "beer": "JP's Ould Sod Irish Red IPA"
 },
 {
   "city": "Torrance",
   "state": " CA",
   "brewery": "The Dudes' Brewing Company",
   "beer": "Surfrider"
 },
 {
   "city": "Torrance",
   "state": " CA",
   "brewery": "The Dudes' Brewing Company",
   "beer": "Kolschtal Eddy"
 },
 {
   "city": "Torrance",
   "state": " CA",
   "brewery": "The Dudes' Brewing Company",
   "beer": "South Bay Session IPA"
 },
 {
   "city": "Torrance",
   "state": " CA",
   "brewery": "The Dudes' Brewing Company",
   "beer": "Grandma's Pecan"
 },
 {
   "city": "Torrance",
   "state": " CA",
   "brewery": "The Dudes' Brewing Company",
   "beer": "Double Trunk"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Ballast Point Brewing Company",
   "beer": "Grapefruit Sculpin"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Ballast Point Brewing Company",
   "beer": "Even Keel"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Ballast Point Brewing Company",
   "beer": "Ballast Point Pale Ale"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Ballast Point Brewing Company",
   "beer": "Big Eye India Pale Ale"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Ballast Point Brewing Company",
   "beer": "Longfin Lager"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Ballast Point Brewing Company",
   "beer": "Sculpin IPA"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Anchor Brewing Company",
   "beer": "Liberty Ale"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Anchor Brewing Company",
   "beer": "IPA"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Anchor Brewing Company",
   "beer": "Summer Wheat"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Anchor Brewing Company",
   "beer": "California Lager"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Anchor Brewing Company",
   "beer": "Brotherhood Steam"
 },
 {
   "city": "Buellton",
   "state": " CA",
   "brewery": "Figueroa Mountain Brewing Company",
   "beer": "Weiss Weiss Baby"
 },
 {
   "city": "Buellton",
   "state": " CA",
   "brewery": "Figueroa Mountain Brewing Company",
   "beer": "Czech Yo Self"
 },
 {
   "city": "Buellton",
   "state": " CA",
   "brewery": "Figueroa Mountain Brewing Company",
   "beer": "FMB 101"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Avery Brewing Company",
   "beer": "Raja"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Avery Brewing Company",
   "beer": "Perzik Saison"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Avery Brewing Company",
   "beer": "Avery Joe’s Premium American Pilsner"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Avery Brewing Company",
   "beer": "White Rascal"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Avery Brewing Company",
   "beer": "Avery India Pale Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Avery Brewing Company",
   "beer": "Ellie’s Brown Ale"
 },
 {
   "city": "Dripping Springs",
   "state": " TX",
   "brewery": "Twisted X Brewing Company",
   "beer": "Cow Creek"
 },
 {
   "city": "Dripping Springs",
   "state": " TX",
   "brewery": "Twisted X Brewing Company",
   "beer": "Chupahopra"
 },
 {
   "city": "Dripping Springs",
   "state": " TX",
   "brewery": "Twisted X Brewing Company",
   "beer": "Twisted X"
 },
 {
   "city": "Kalamazoo",
   "state": " MI",
   "brewery": "Gonzo's BiggDogg Brewing",
   "beer": "Vanilla Porter"
 },
 {
   "city": "Murphysboro",
   "state": " IL",
   "brewery": "Big Muddy Brewing",
   "beer": "Blueberry Blonde"
 },
 {
   "city": "Murphysboro",
   "state": " IL",
   "brewery": "Big Muddy Brewing",
   "beer": "Galaxy IPA"
 },
 {
   "city": "East Fairfield",
   "state": " VT",
   "brewery": "Lost Nation Brewing",
   "beer": "Gose"
 },
 {
   "city": "East Fairfield",
   "state": " VT",
   "brewery": "Lost Nation Brewing",
   "beer": "Vermont Pilsner"
 },
 {
   "city": "East Fairfield",
   "state": " VT",
   "brewery": "Lost Nation Brewing",
   "beer": "Mosaic Single Hop IPA"
 },
 {
   "city": "East Fairfield",
   "state": " VT",
   "brewery": "Lost Nation Brewing",
   "beer": "Lost Galaxy"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "Rising Tide Brewing Company",
   "beer": "Gose"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "Rising Tide Brewing Company",
   "beer": "Maine Island Trail Ale"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Jah Mon"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Oktoberfest"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Headless Wylie"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Dayman IPA"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "All Aboard! Anniversary Stout"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Hop Lace"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "OH-PA Session Pale Ale"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Patrick's Poison"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Rudolph's Red"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Babbling Blonde"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Maxwell's Scottish Ale"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Grateful White"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "RT Lager"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Old Wylie's IPA"
 },
 {
   "city": "Export",
   "state": " PA",
   "brewery": "Rivertowne Brewing Company",
   "beer": "Hala Kahiki Pineapple Beer"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Revolution Brewing Company",
   "beer": "Fist City"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Revolution Brewing Company",
   "beer": "A Little Crazy"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Revolution Brewing Company",
   "beer": "Rosa Hibiscus Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Revolution Brewing Company",
   "beer": "Fistmas Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Revolution Brewing Company",
   "beer": "Oktoberfest Revolution"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Revolution Brewing Company",
   "beer": "Eugene Porter"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Revolution Brewing Company",
   "beer": "Anti-Hero IPA"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Revolution Brewing Company",
   "beer": "Bottom Up Belgian Wit"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Wooden Rooster"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Ginger Peach Saison"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Zombie Monkie"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Wild Plum Farmhouse Ale"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Vanilla Bean Buffalo Sweat"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Ethos IPA"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Tallgrass Pub Ale"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Oasis"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Buffalo Sweat"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Halcyon Unfiltered Wheat"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "8-Bit Pale Ale"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Velvet Rooster"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Halcyon Unfiltered Wheat"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Köld Lager (2010)"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Oasis (2010)"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Tallgrass Ale"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Buffalo Sweat (2010)"
 },
 {
   "city": "Manhattan",
   "state": " KS",
   "brewery": "Tallgrass Brewing Company",
   "beer": "Tallgrass IPA"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "4Beans"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Jammer"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Abigale"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Rad"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Bengali"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Sensi Harvest"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Hi-Res"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Global Warmer"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Autumnation (2013)"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "The Crisp"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Sweet Action"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Righteous Ale"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Bengali Tiger"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "3Beans"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Brownstone"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Apollo"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Harbinger"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Resin"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Diesel"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Autumnation (2011-12) (2011)"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "The Crisp (2011)"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Sweet Action (2011)"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Righteous Ale (2011)"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Sixpoint Craft Ales",
   "beer": "Bengali Tiger (2011)"
 },
 {
   "city": "Hooksett",
   "state": " NH",
   "brewery": "White Birch Brewing",
   "beer": "Raspberry Berliner Weisse"
 },
 {
   "city": "Hooksett",
   "state": " NH",
   "brewery": "White Birch Brewing",
   "beer": "Hop Session"
 },
 {
   "city": "Hooksett",
   "state": " NH",
   "brewery": "White Birch Brewing",
   "beer": "Blueberry Berliner Weisse"
 },
 {
   "city": "Hooksett",
   "state": " NH",
   "brewery": "White Birch Brewing",
   "beer": "Berliner Weisse"
 },
 {
   "city": "Paso Robles",
   "state": " CA",
   "brewery": "Firestone Walker Brewing Company",
   "beer": "Easy Jack"
 },
 {
   "city": "Paso Robles",
   "state": " CA",
   "brewery": "Firestone Walker Brewing Company",
   "beer": "Union Jack"
 },
 {
   "city": "Paso Robles",
   "state": " CA",
   "brewery": "Firestone Walker Brewing Company",
   "beer": "Pivo Pils"
 },
 {
   "city": "Paso Robles",
   "state": " CA",
   "brewery": "Firestone Walker Brewing Company",
   "beer": "805 Blonde Ale"
 },
 {
   "city": "Paso Robles",
   "state": " CA",
   "brewery": "Firestone Walker Brewing Company",
   "beer": "805"
 },
 {
   "city": "Atlanta",
   "state": " GA",
   "brewery": "SweetWater Brewing Company",
   "beer": "Take Two Pils"
 },
 {
   "city": "Atlanta",
   "state": " GA",
   "brewery": "SweetWater Brewing Company",
   "beer": "Waterkeeper"
 },
 {
   "city": "Atlanta",
   "state": " GA",
   "brewery": "SweetWater Brewing Company",
   "beer": "SweetWater IPA"
 },
 {
   "city": "Atlanta",
   "state": " GA",
   "brewery": "SweetWater Brewing Company",
   "beer": "420 Extra Pale Ale"
 },
 {
   "city": "Troutville",
   "state": " VA",
   "brewery": "Flying Mouse Brewery",
   "beer": "Flying Mouse 8"
 },
 {
   "city": "Troutville",
   "state": " VA",
   "brewery": "Flying Mouse Brewery",
   "beer": "Flying Mouse 4"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Lee Hill Series Vol. 5 - Belgian Style Quadrupel Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Lee Hill Series Vol. 4 - Manhattan Style Rye Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Lee Hill Series Vol. 2 - Wild Saison"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Lee Hill Series Vol. 3 - Barrel Aged Imperial Stout"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Lee Hill Series Vol. 1 - Barrel Aged Brown Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Blood Orange Saison"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Thai Style White IPA"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Ferus Fluxus Wild Belgian Pale Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Upslope Imperial India Pale Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Upslope Christmas Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Upslope Pumpkin Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Upslope Belgian Style Pale Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Upslope Foreign Style Stout"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Top Rope Mexican-style Craft Lager"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Upslope Craft Lager"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Upslope Brown Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Upslope Pale Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Upslope Brewing Company",
   "beer": "Upslope India Pale Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Pipeworks Brewing Company",
   "beer": "Blood of the Unicorn"
 },
 {
   "city": "Roseville",
   "state": " MN",
   "brewery": "Bent Brewstillery",
   "beer": "Moar"
 },
 {
   "city": "Roseville",
   "state": " MN",
   "brewery": "Bent Brewstillery",
   "beer": "Uber Lupin Schwarz IPA"
 },
 {
   "city": "Roseville",
   "state": " MN",
   "brewery": "Bent Brewstillery",
   "beer": "Nordic Blonde"
 },
 {
   "city": "Lombard",
   "state": " IL",
   "brewery": "Flesk Brewing Company",
   "beer": "Moped Traveler"
 },
 {
   "city": "Lemont",
   "state": " IL",
   "brewery": "Pollyanna Brewing Company",
   "beer": "Mazzie"
 },
 {
   "city": "Lyons",
   "state": " IL",
   "brewery": "BuckleDown Brewing",
   "beer": "Painted Turtle"
 },
 {
   "city": "Bloomington",
   "state": " IL",
   "brewery": "Destihl Brewery",
   "beer": "Weissenheimer"
 },
 {
   "city": "Bloomington",
   "state": " IL",
   "brewery": "Destihl Brewery",
   "beer": "Abbey's Single (2015- )"
 },
 {
   "city": "Bloomington",
   "state": " IL",
   "brewery": "Destihl Brewery",
   "beer": "Vertex IPA"
 },
 {
   "city": "Bloomington",
   "state": " IL",
   "brewery": "Destihl Brewery",
   "beer": "Here Gose Nothin'"
 },
 {
   "city": "Bloomington",
   "state": " IL",
   "brewery": "Destihl Brewery",
   "beer": "Strawberry Blonde"
 },
 {
   "city": "Bloomington",
   "state": " IL",
   "brewery": "Destihl Brewery",
   "beer": "Hoperation Overload"
 },
 {
   "city": "Bloomington",
   "state": " IL",
   "brewery": "Destihl Brewery",
   "beer": "Abbey's Single Ale (Current)"
 },
 {
   "city": "St. Paul",
   "state": " MN",
   "brewery": "Summit Brewing Company",
   "beer": "Make It So"
 },
 {
   "city": "St. Paul",
   "state": " MN",
   "brewery": "Summit Brewing Company",
   "beer": "Hopvale Organic Ale"
 },
 {
   "city": "St. Paul",
   "state": " MN",
   "brewery": "Summit Brewing Company",
   "beer": "Unchained #18 Hop Silo"
 },
 {
   "city": "Portage",
   "state": " MI",
   "brewery": "Latitude 42 Brewing Company",
   "beer": "Beach Cruiser"
 },
 {
   "city": "Portage",
   "state": " MI",
   "brewery": "Latitude 42 Brewing Company",
   "beer": "I.P. Eh!"
 },
 {
   "city": "Portage",
   "state": " MI",
   "brewery": "Latitude 42 Brewing Company",
   "beer": "Schoolhouse Honey"
 },
 {
   "city": "Portage",
   "state": " MI",
   "brewery": "Latitude 42 Brewing Company",
   "beer": "10 Degrees of Separation"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "4 Hands Brewing Company",
   "beer": "Passion Fruit Prussia"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "4 Hands Brewing Company",
   "beer": "Send Help"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "4 Hands Brewing Company",
   "beer": "Cast Iron Oatmeal Brown"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "4 Hands Brewing Company",
   "beer": "Reprise Centennial Red"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "4 Hands Brewing Company",
   "beer": "Alter Ego"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "4 Hands Brewing Company",
   "beer": "Divided Sky"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "4 Hands Brewing Company",
   "beer": "Resurrected"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "4 Hands Brewing Company",
   "beer": "Contact High"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "Todd the Axe Man"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "Doomtree"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "BLAKKR"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "Overrated! West Coast Style IPA"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "WET"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "Bitter Brewer"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "SurlyFest"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "Coffee Bender"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "Bender"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "Abrasive Ale"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "Hell"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "CynicAle"
 },
 {
   "city": "Brooklyn Center",
   "state": " MN",
   "brewery": "Surly Brewing Company",
   "beer": "Furious"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against The Grain Brewery",
   "beer": "Citra Ass Down"
 },
 {
   "city": "Louisville",
   "state": " KY",
   "brewery": "Against The Grain Brewery",
   "beer": "The Brown Note"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Crazy Mountain Brewing Company",
   "beer": "Neomexicanus Native"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Crazy Mountain Brewing Company",
   "beer": "Old Soul"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Crazy Mountain Brewing Company",
   "beer": "Snowcat Coffee Stout"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Crazy Mountain Brewing Company",
   "beer": "WinterWonderGrass Festival Ale"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Crazy Mountain Brewing Company",
   "beer": "Boohai Red Ale"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Crazy Mountain Brewing Company",
   "beer": "Lava Lake Wit"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Crazy Mountain Brewing Company",
   "beer": "Mountain Livin' Pale Ale"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Crazy Mountain Brewing Company",
   "beer": "Crazy Mountain Amber Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "SlapShot Brewing Company",
   "beer": "Monkey Dancing On A Razor Blade"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "SlapShot Brewing Company",
   "beer": "Tripel Deke"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Mikerphone Brewing",
   "beer": "Vinyl Frontier"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Mikerphone Brewing",
   "beer": "Disco Superfly"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Mikerphone Brewing",
   "beer": "Misty Mountain Hop"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Mikerphone Brewing",
   "beer": "One-Hit Wonderful"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Mikerphone Brewing",
   "beer": "En Parfaite Harmonie"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Mikerphone Brewing",
   "beer": "Daft Funk"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Mikerphone Brewing",
   "beer": "Love In An Ellavator"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Mikerphone Brewing",
   "beer": "Spin Doctor"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Freetail Brewing Company",
   "beer": "OktoberFiesta"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Freetail Brewing Company",
   "beer": "Texicali "
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Freetail Brewing Company",
   "beer": "Pinata Protest"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Freetail Brewing Company",
   "beer": "Bat Outta Helles"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Freetail Brewing Company",
   "beer": "Original"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Freetail Brewing Company",
   "beer": "Rye Wit"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Freetail Brewing Company",
   "beer": "Soul Doubt"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Freetail Brewing Company",
   "beer": "Yo Soy Un Berliner"
 },
 {
   "city": "St Petersburg",
   "state": " FL",
   "brewery": "3 Daughters Brewing",
   "beer": "Bimini Twist"
 },
 {
   "city": "St Petersburg",
   "state": " FL",
   "brewery": "3 Daughters Brewing",
   "beer": "Beach Blonde"
 },
 {
   "city": "St Petersburg",
   "state": " FL",
   "brewery": "3 Daughters Brewing",
   "beer": "Rod Bender Red"
 },
 {
   "city": "Mt. Airy",
   "state": " MD",
   "brewery": "Red Shedman Farm Brewery and Hop...",
   "beer": "Farmer's Daughter Blonde"
 },
 {
   "city": "Mt. Airy",
   "state": " MD",
   "brewery": "Red Shedman Farm Brewery and Hop...",
   "beer": "Pump House IPA"
 },
 {
   "city": "Mt. Airy",
   "state": " MD",
   "brewery": "Red Shedman Farm Brewery and Hop...",
   "beer": "Suicide Blonde IPA"
 },
 {
   "city": "Mt. Airy",
   "state": " MD",
   "brewery": "Red Shedman Farm Brewery and Hop...",
   "beer": "Vanilla Porter"
 },
 {
   "city": "Mt. Airy",
   "state": " MD",
   "brewery": "Red Shedman Farm Brewery and Hop...",
   "beer": "Honey Rye"
 },
 {
   "city": "Boone",
   "state": " NC",
   "brewery": "Appalachian Mountain Brewery",
   "beer": "Long Leaf"
 },
 {
   "city": "Boone",
   "state": " NC",
   "brewery": "Appalachian Mountain Brewery",
   "beer": "Honey Badger Blonde"
 },
 {
   "city": "Boone",
   "state": " NC",
   "brewery": "Appalachian Mountain Brewery",
   "beer": "Porter (a/k/a Black Gold Porter)"
 },
 {
   "city": "Charlotte",
   "state": " NC",
   "brewery": "Birdsong Brewing Company",
   "beer": "Jalapeno Pale Ale"
 },
 {
   "city": "Baltimore",
   "state": " MD",
   "brewery": "Union Craft Brewing",
   "beer": "Double Duckpin"
 },
 {
   "city": "Baltimore",
   "state": " MD",
   "brewery": "Union Craft Brewing",
   "beer": "Old Pro"
 },
 {
   "city": "Baltimore",
   "state": " MD",
   "brewery": "Union Craft Brewing",
   "beer": "Duckpin Pale Ale"
 },
 {
   "city": "Baltimore",
   "state": " MD",
   "brewery": "Union Craft Brewing",
   "beer": "Balt Altbier"
 },
 {
   "city": "Detroit",
   "state": " MI",
   "brewery": "Atwater Brewery",
   "beer": "Hop A-Peel"
 },
 {
   "city": "Detroit",
   "state": " MI",
   "brewery": "Atwater Brewery",
   "beer": "Vanilla Java Porter"
 },
 {
   "city": "Detroit",
   "state": " MI",
   "brewery": "Atwater Brewery",
   "beer": "Michelada"
 },
 {
   "city": "Detroit",
   "state": " MI",
   "brewery": "Atwater Brewery",
   "beer": "Dirty Blonde Ale"
 },
 {
   "city": "Detroit",
   "state": " MI",
   "brewery": "Atwater Brewery",
   "beer": "Grand Circus IPA"
 },
 {
   "city": "Detroit",
   "state": " MI",
   "brewery": "Atwater Brewery",
   "beer": "Atwater's Lager"
 },
 {
   "city": "Madison",
   "state": " WI",
   "brewery": "Ale Asylum",
   "beer": "Hopalicious"
 },
 {
   "city": "Warrenville",
   "state": " IL",
   "brewery": "Two Brothers Brewing Company",
   "beer": "Wobble"
 },
 {
   "city": "Warrenville",
   "state": " IL",
   "brewery": "Two Brothers Brewing Company",
   "beer": "Night Cat"
 },
 {
   "city": "Warrenville",
   "state": " IL",
   "brewery": "Two Brothers Brewing Company",
   "beer": "Night Cat (2014)"
 },
 {
   "city": "Warrenville",
   "state": " IL",
   "brewery": "Two Brothers Brewing Company",
   "beer": "Dog Days Lager"
 },
 {
   "city": "Warrenville",
   "state": " IL",
   "brewery": "Two Brothers Brewing Company",
   "beer": "Sidekick Extra Pale Ale"
 },
 {
   "city": "Warrenville",
   "state": " IL",
   "brewery": "Two Brothers Brewing Company",
   "beer": "Atom Smasher"
 },
 {
   "city": "Warrenville",
   "state": " IL",
   "brewery": "Two Brothers Brewing Company",
   "beer": "Testudo"
 },
 {
   "city": "Warrenville",
   "state": " IL",
   "brewery": "Two Brothers Brewing Company",
   "beer": "Hobnob B & B Pale Ale"
 },
 {
   "city": "Warrenville",
   "state": " IL",
   "brewery": "Two Brothers Brewing Company",
   "beer": "Cane and Ebel"
 },
 {
   "city": "Warrenville",
   "state": " IL",
   "brewery": "Two Brothers Brewing Company",
   "beer": "Outlaw IPA (2015)"
 },
 {
   "city": "Duluth",
   "state": " MN",
   "brewery": "Bent Paddle Brewing Company",
   "beer": "Cold Press"
 },
 {
   "city": "Duluth",
   "state": " MN",
   "brewery": "Bent Paddle Brewing Company",
   "beer": "Harness the Winter"
 },
 {
   "city": "Duluth",
   "state": " MN",
   "brewery": "Bent Paddle Brewing Company",
   "beer": "14° ESB "
 },
 {
   "city": "Duluth",
   "state": " MN",
   "brewery": "Bent Paddle Brewing Company",
   "beer": "Bent Hop Golden IPA"
 },
 {
   "city": "Duluth",
   "state": " MN",
   "brewery": "Bent Paddle Brewing Company",
   "beer": "Bent Paddle Black Ale"
 },
 {
   "city": "Duluth",
   "state": " MN",
   "brewery": "Bent Paddle Brewing Company",
   "beer": "Venture Pils"
 },
 {
   "city": "Kalamazoo",
   "state": " MI",
   "brewery": "Bell's Brewery",
   "beer": "Oberon"
 },
 {
   "city": "Kalamazoo",
   "state": " MI",
   "brewery": "Bell's Brewery",
   "beer": "Smitten"
 },
 {
   "city": "Kalamazoo",
   "state": " MI",
   "brewery": "Bell's Brewery",
   "beer": "Winter White"
 },
 {
   "city": "Kalamazoo",
   "state": " MI",
   "brewery": "Bell's Brewery",
   "beer": "Oberon"
 },
 {
   "city": "Kalamazoo",
   "state": " MI",
   "brewery": "Bell's Brewery",
   "beer": "Two Hearted"
 },
 {
   "city": "Kalamazoo",
   "state": " MI",
   "brewery": "Bell's Brewery",
   "beer": "Best Brown"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Blue Owl Brewing",
   "beer": "Professor Black"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Blue Owl Brewing",
   "beer": "Little Boss"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Blue Owl Brewing",
   "beer": "Van Dayum!"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Blue Owl Brewing",
   "beer": "Spirit Animal"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Speakasy Ales & Lagers",
   "beer": "Baby Daddy Session IPA"
 },
 {
   "city": "Sheridan",
   "state": " WY",
   "brewery": "Black Tooth Brewing Company",
   "beer": "Saddle Bronc Brown Ale"
 },
 {
   "city": "Sheridan",
   "state": " WY",
   "brewery": "Black Tooth Brewing Company",
   "beer": "Bomber Mountain Amber Ale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Hard Cider"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Totally Radler"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Nonstop Hef Hop"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Rise Up Red"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Survival Stout"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Hopworks IPA"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Abominable Winter Ale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Pigwar White India Pale Ale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Rise-Up Red (2014)"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Abominable Winter Ale (2012)"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "HUB Lager"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Hopworks Urban Brewery",
   "beer": "Hopworks IPA (2012)"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Epic Brewing",
   "beer": "Lil' Brainless Raspberries"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Epic Brewing",
   "beer": "Element 29"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Epic Brewing",
   "beer": "Hop Syndrome"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Epic Brewing",
   "beer": "Escape to Colorado"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Slow Ride"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Ranger IPA"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Shift"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "1554 Black Lager"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Blue Paddle"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "California Route"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Snapshot"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Sunshine Wheat Beer"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Fat Tire Amber Ale"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Shift (1)"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Fat Tire Amber Ale (2011)"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Shift"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Ranger IPA"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Fat Tire Amber Ale"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Ranger IPA (Current)"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Sunshine Wheat Beer (2009)"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "New Belgium Brewing Company",
   "beer": "Fat Tire Amber Ale (2008)"
 },
 {
   "city": "Chico",
   "state": " CA",
   "brewery": "Sierra Nevada Brewing Company",
   "beer": "Nooner"
 },
 {
   "city": "Chico",
   "state": " CA",
   "brewery": "Sierra Nevada Brewing Company",
   "beer": "Torpedo"
 },
 {
   "city": "Chico",
   "state": " CA",
   "brewery": "Sierra Nevada Brewing Company",
   "beer": "Yonder Bock"
 },
 {
   "city": "Chico",
   "state": " CA",
   "brewery": "Sierra Nevada Brewing Company",
   "beer": "CANfusion Rye Bock"
 },
 {
   "city": "Chico",
   "state": " CA",
   "brewery": "Sierra Nevada Brewing Company",
   "beer": "Sierra Nevada Pale Ale"
 },
 {
   "city": "Chico",
   "state": " CA",
   "brewery": "Sierra Nevada Brewing Company",
   "beer": "Old Chico Crystal Wheat"
 },
 {
   "city": "Chico",
   "state": " CA",
   "brewery": "Sierra Nevada Brewing Company",
   "beer": "Summerfest"
 },
 {
   "city": "Chico",
   "state": " CA",
   "brewery": "Sierra Nevada Brewing Company",
   "beer": "Torpedo"
 },
 {
   "city": "Chico",
   "state": " CA",
   "brewery": "Sierra Nevada Brewing Company",
   "beer": "Sierra Nevada Pale Ale"
 },
 {
   "city": "Houghton",
   "state": " MI",
   "brewery": "Keweenaw Brewing Company",
   "beer": "U. P. Witbier"
 },
 {
   "city": "Houghton",
   "state": " MI",
   "brewery": "Keweenaw Brewing Company",
   "beer": "November Gale Pale Ale"
 },
 {
   "city": "Houghton",
   "state": " MI",
   "brewery": "Keweenaw Brewing Company",
   "beer": "Olde Ore Dock Scottish Ale"
 },
 {
   "city": "Houghton",
   "state": " MI",
   "brewery": "Keweenaw Brewing Company",
   "beer": "Widow Maker Black Ale"
 },
 {
   "city": "Houghton",
   "state": " MI",
   "brewery": "Keweenaw Brewing Company",
   "beer": "Lift Bridge Brown Ale"
 },
 {
   "city": "Houghton",
   "state": " MI",
   "brewery": "Keweenaw Brewing Company",
   "beer": "Pick Axe Blonde Ale"
 },
 {
   "city": "Houghton",
   "state": " MI",
   "brewery": "Keweenaw Brewing Company",
   "beer": "Red Jacket Amber Ale"
 },
 {
   "city": "Traverse City",
   "state": " MI",
   "brewery": "Brewery Terra Firma",
   "beer": "Manitou Amber"
 },
 {
   "city": "Westerly",
   "state": " RI",
   "brewery": "Grey Sail Brewing Company",
   "beer": "Autumn Winds Fest Beer"
 },
 {
   "city": "Westerly",
   "state": " RI",
   "brewery": "Grey Sail Brewing Company",
   "beer": "Captain's Daughter"
 },
 {
   "city": "Kirkwood",
   "state": " MO",
   "brewery": "Kirkwood Station Brewing Company",
   "beer": "India Pale Ale"
 },
 {
   "city": "Kirkwood",
   "state": " MO",
   "brewery": "Kirkwood Station Brewing Company",
   "beer": "Blackberry Wheat"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Goose Island Brewing Company",
   "beer": "312 Urban Pale Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Goose Island Brewing Company",
   "beer": "312 Urban Pale Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Goose Island Brewing Company",
   "beer": "312 Urban Wheat Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Goose Island Brewing Company",
   "beer": "312 Urban Wheat Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Goose Island Brewing Company",
   "beer": "312 Urban Wheat Ale (2012)"
 },
 {
   "city": "East Windsor",
   "state": " CT",
   "brewery": "Broad Brook Brewing LLC",
   "beer": "Broad Brook Ale"
 },
 {
   "city": "Wilkes-Barre",
   "state": " PA",
   "brewery": "The Lion Brewery",
   "beer": "Lionshead"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Madtree Brewing Company",
   "beer": "Galaxy High"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Madtree Brewing Company",
   "beer": "Sol Drifter"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Madtree Brewing Company",
   "beer": "Thunder Snow"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Madtree Brewing Company",
   "beer": "The Great Pumpcan"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Madtree Brewing Company",
   "beer": "LIFT"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Madtree Brewing Company",
   "beer": "SPRYE"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Madtree Brewing Company",
   "beer": "Psychopathy"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Madtree Brewing Company",
   "beer": "Gnarly Brown"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Madtree Brewing Company",
   "beer": "Happy Amber"
 },
 {
   "city": "Athens",
   "state": " OH",
   "brewery": "Jackie O's Pub & Brewery",
   "beer": "Razz Wheat"
 },
 {
   "city": "Athens",
   "state": " OH",
   "brewery": "Jackie O's Pub & Brewery",
   "beer": "Hop Ryot"
 },
 {
   "city": "Athens",
   "state": " OH",
   "brewery": "Jackie O's Pub & Brewery",
   "beer": "Mystic Mama IPA"
 },
 {
   "city": "Athens",
   "state": " OH",
   "brewery": "Jackie O's Pub & Brewery",
   "beer": "Firefly Amber Ale"
 },
 {
   "city": "Athens",
   "state": " OH",
   "brewery": "Jackie O's Pub & Brewery",
   "beer": "Chomolungma Honey Nut Brown Ale"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Rhinegeist Brewery",
   "beer": "Hustle"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Rhinegeist Brewery",
   "beer": "Pure Fury"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Rhinegeist Brewery",
   "beer": "Dad"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Rhinegeist Brewery",
   "beer": "Panther"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Rhinegeist Brewery",
   "beer": "Franz"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Rhinegeist Brewery",
   "beer": "Zen"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Rhinegeist Brewery",
   "beer": "Truth"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Rhinegeist Brewery",
   "beer": "Cougar"
 },
 {
   "city": "Dayton",
   "state": " OH",
   "brewery": "Warped Wing Brewing Company",
   "beer": "Self Starter"
 },
 {
   "city": "Dayton",
   "state": " OH",
   "brewery": "Warped Wing Brewing Company",
   "beer": "Ermal's"
 },
 {
   "city": "Dayton",
   "state": " OH",
   "brewery": "Warped Wing Brewing Company",
   "beer": "10 Ton"
 },
 {
   "city": "Dayton",
   "state": " OH",
   "brewery": "Warped Wing Brewing Company",
   "beer": "Flyin' Rye"
 },
 {
   "city": "Marquette",
   "state": " MA",
   "brewery": "Blackrocks Brewery",
   "beer": "Flying Sailor"
 },
 {
   "city": "Morganton",
   "state": " NC",
   "brewery": "Catawba Valley Brewing Company",
   "beer": "Peanut Butter Jelly Time"
 },
 {
   "city": "Morganton",
   "state": " NC",
   "brewery": "Catawba Valley Brewing Company",
   "beer": "King Coconut"
 },
 {
   "city": "Hershey",
   "state": " PA",
   "brewery": "Tröegs Brewing Company",
   "beer": "Troegenator"
 },
 {
   "city": "Hershey",
   "state": " PA",
   "brewery": "Tröegs Brewing Company",
   "beer": "Nugget Nectar"
 },
 {
   "city": "Hershey",
   "state": " PA",
   "brewery": "Tröegs Brewing Company",
   "beer": "Sunshine Pils"
 },
 {
   "city": "Hershey",
   "state": " PA",
   "brewery": "Tröegs Brewing Company",
   "beer": "Troegenator Doublebock"
 },
 {
   "city": "Hershey",
   "state": " PA",
   "brewery": "Tröegs Brewing Company",
   "beer": "Perpetual IPA"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Mission Brewery",
   "beer": "Cortez Gold"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Mission Brewery",
   "beer": "Mission IPA"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Mission Brewery",
   "beer": "El Conquistador Extra Pale Ale"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Mission Brewery",
   "beer": "Shipwrecked Double IPA"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Christian Moerlein Brewing Company",
   "beer": "Bay of Bengal Double IPA (2014)"
 },
 {
   "city": "Lexington",
   "state": " KY",
   "brewery": "West Sixth Brewing",
   "beer": "Christmas Ale"
 },
 {
   "city": "Lexington",
   "state": " KY",
   "brewery": "West Sixth Brewing",
   "beer": "Pay It Forward Cocoa Porter"
 },
 {
   "city": "Lexington",
   "state": " KY",
   "brewery": "West Sixth Brewing",
   "beer": "West Sixth Amber Ale"
 },
 {
   "city": "Lexington",
   "state": " KY",
   "brewery": "West Sixth Brewing",
   "beer": "West Sixth IPA"
 },
 {
   "city": "Newport",
   "state": " RI",
   "brewery": "Coastal Extreme Brewing Company",
   "beer": "Rhode Island Blueberry"
 },
 {
   "city": "Newport",
   "state": " RI",
   "brewery": "Coastal Extreme Brewing Company",
   "beer": "Newport Storm IPA"
 },
 {
   "city": "Newport",
   "state": " RI",
   "brewery": "Coastal Extreme Brewing Company",
   "beer": "Hurricane Amber Ale (2004)"
 },
 {
   "city": "Newport",
   "state": " RI",
   "brewery": "Coastal Extreme Brewing Company",
   "beer": "Hurricane Amber Ale"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "King Street Brewing Company",
   "beer": "Amber Ale"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "King Street Brewing Company",
   "beer": "King Street Pilsner"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "King Street Brewing Company",
   "beer": "King Street IPA"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "King Street Brewing Company",
   "beer": "King Street Hefeweizen"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "King Street Brewing Company",
   "beer": "King Street Blonde Ale"
 },
 {
   "city": "Lowell",
   "state": " MA",
   "brewery": "Beer Works Brewery",
   "beer": "Watermelon Ale"
 },
 {
   "city": "Lowell",
   "state": " MA",
   "brewery": "Beer Works Brewery",
   "beer": "Fenway American Pale Ale"
 },
 {
   "city": "Lowell",
   "state": " MA",
   "brewery": "Beer Works Brewery",
   "beer": "Back Bay IPA"
 },
 {
   "city": "Lowell",
   "state": " MA",
   "brewery": "Beer Works Brewery",
   "beer": "Bunker Hill Blueberry Ale "
 },
 {
   "city": "Lone Tree",
   "state": " CO",
   "brewery": "Lone Tree Brewing Company",
   "beer": "Peach Pale Ale"
 },
 {
   "city": "Columbus",
   "state": " OH",
   "brewery": "Four String Brewing Company",
   "beer": "Four String Vanilla Porter"
 },
 {
   "city": "Columbus",
   "state": " OH",
   "brewery": "Four String Brewing Company",
   "beer": "Suncaster Summer Wheat"
 },
 {
   "city": "Columbus",
   "state": " OH",
   "brewery": "Four String Brewing Company",
   "beer": "Brass Knuckle Pale Ale"
 },
 {
   "city": "Columbus",
   "state": " OH",
   "brewery": "Four String Brewing Company",
   "beer": "Big Star White IPA"
 },
 {
   "city": "Pineland",
   "state": " ME",
   "brewery": "Glabrous Brewing Company",
   "beer": "Clean Shave IPA"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Firestarter India Pale Ale"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Kilt Dropper Scotch Ale"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Wood Splitter Pilsner"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Gyptoberfest"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Farmer Wirtz India Pale Ale"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Slow & Steady Golden Ale"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Pink-I Raspberry IPA"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Moe's Original Bar B Que 'Bama Brew Golden Ale"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Live Local Golden Ale"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Screaming Eagle Special Ale ESB"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Dirtbag Dunkel"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Kindler Pale Ale"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Mistress Winter Wheat"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Tent Pole Vanilla Porter"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Awry Rye Pale Ale"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Demshitz Brown Ale"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Wood Splitter Pilsner (2012)"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Brush Creek Blonde"
 },
 {
   "city": "Eagle",
   "state": " CO",
   "brewery": "Bonfire Brewing Company",
   "beer": "Firestarter India Pale Ale"
 },
 {
   "city": "Bloomfield",
   "state": " CT",
   "brewery": "Thomas Hooker Brewing Company",
   "beer": "Watermelon Ale"
 },
 {
   "city": "North Woodstock",
   "state": " NH",
   "brewery": "Woodstock Inn, Station & Brewery",
   "beer": "4000 Footer IPA"
 },
 {
   "city": "North Woodstock",
   "state": " NH",
   "brewery": "Woodstock Inn, Station & Brewery",
   "beer": "Summer Brew"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Renegade Brewing Company",
   "beer": "Consilium"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Renegade Brewing Company",
   "beer": "Hammer & Sickle"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Renegade Brewing Company",
   "beer": "Redacted Rye IPA"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Renegade Brewing Company",
   "beer": "Elevation Triple India Pale Ale"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Renegade Brewing Company",
   "beer": "5:00 O'Clock Afternoon Ale"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Renegade Brewing Company",
   "beer": "Ryeteous Rye IPA (2012)"
 },
 {
   "city": "Vista",
   "state": " CA",
   "brewery": "Mother Earth Brew Company",
   "beer": "Cali Creamin'"
 },
 {
   "city": "Temecula",
   "state": " CA",
   "brewery": "Black Market Brewing Company",
   "beer": "Deception"
 },
 {
   "city": "Temecula",
   "state": " CA",
   "brewery": "Black Market Brewing Company",
   "beer": "Blackmarket Rye IPA"
 },
 {
   "city": "Temecula",
   "state": " CA",
   "brewery": "Black Market Brewing Company",
   "beer": "Black Market Hefeweizen"
 },
 {
   "city": "Temecula",
   "state": " CA",
   "brewery": "Black Market Brewing Company",
   "beer": "Aftermath Pale Ale"
 },
 {
   "city": "Yardley",
   "state": " PA",
   "brewery": "Vault Brewing Company",
   "beer": "Nitro Can Coffee Stout"
 },
 {
   "city": "Laurel",
   "state": " MD",
   "brewery": "Jailbreak Brewing Company",
   "beer": "Welcome to Scoville"
 },
 {
   "city": "Norfolk",
   "state": " VA",
   "brewery": "Smartmouth Brewing Company",
   "beer": "Rule G IPA"
 },
 {
   "city": "Norfolk",
   "state": " VA",
   "brewery": "Smartmouth Brewing Company",
   "beer": "Murphy's Law"
 },
 {
   "city": "Norfolk",
   "state": " VA",
   "brewery": "Smartmouth Brewing Company",
   "beer": "Alter Ego "
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Base Camp Brewing Co.",
   "beer": "Hop in the ‘Pool Helles"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Base Camp Brewing Co.",
   "beer": "Ultra Gnar Gnar IPA"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Base Camp Brewing Co.",
   "beer": "In-Tents India Pale Lager"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Base Camp Brewing Co.",
   "beer": "Lost Meridian Wit"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Base Camp Brewing Co.",
   "beer": "Celestial Meridian Cascadian Dark Lager"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Alameda Brewing",
   "beer": "P-Town Pilsner"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Alameda Brewing",
   "beer": "Klickitat Pale Ale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Alameda Brewing",
   "beer": "Yellow Wolf Imperial IPA"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Pine Belt Pale Ale"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Walloon"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Le Mort Vivant"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Red Cockaded Ale"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Valkyrie Double IPA"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Red Cockaded Ale (2013)"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Old Potentate"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Bombshell Blonde"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "PRO-AM (2012) (2012)"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Walloon (2014)"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Le Mort Vivant (2011)"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Buried Hatchet Stout"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Pine Belt Pale Ale"
 },
 {
   "city": "Conroe",
   "state": " TX",
   "brewery": "Southern Star Brewing Company",
   "beer": "Bombshell Blonde"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Steamworks Brewing Company",
   "beer": "Third Eye Enlightened Pale Ale"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Steamworks Brewing Company",
   "beer": "Colorado Kölsch"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Steamworks Brewing Company",
   "beer": "Steam Engine Lager"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Steamworks Brewing Company",
   "beer": "Third Eye Pale Ale"
 },
 {
   "city": "Milwaukee",
   "state": " WI",
   "brewery": "Horny Goat Brew Pub",
   "beer": "Watermelon Wheat"
 },
 {
   "city": "Milwaukee",
   "state": " WI",
   "brewery": "Horny Goat Brew Pub",
   "beer": "Laka Laka Pineapple"
 },
 {
   "city": "Milwaukee",
   "state": " WI",
   "brewery": "Horny Goat Brew Pub",
   "beer": "Oktoberfest"
 },
 {
   "city": "Cheboygan",
   "state": " MI",
   "brewery": "Cheboygan Brewing Company",
   "beer": "IPA #11"
 },
 {
   "city": "Cheboygan",
   "state": " MI",
   "brewery": "Cheboygan Brewing Company",
   "beer": "Blood Orange Honey"
 },
 {
   "city": "Cheboygan",
   "state": " MI",
   "brewery": "Cheboygan Brewing Company",
   "beer": "Lighthouse Amber"
 },
 {
   "city": "Ashland",
   "state": " VA",
   "brewery": "Center of the Universe Brewing C...",
   "beer": "Main St. Virginia Ale"
 },
 {
   "city": "Ashland",
   "state": " VA",
   "brewery": "Center of the Universe Brewing C...",
   "beer": "Chin Music Amber Lager"
 },
 {
   "city": "Ashland",
   "state": " VA",
   "brewery": "Center of the Universe Brewing C...",
   "beer": "Main St. Virginia Ale"
 },
 {
   "city": "Ashland",
   "state": " VA",
   "brewery": "Center of the Universe Brewing C...",
   "beer": "Ray Ray’s Pale Ale"
 },
 {
   "city": "Ipswich",
   "state": " MA",
   "brewery": "Ipswich Ale Brewery",
   "beer": "Summer Ale"
 },
 {
   "city": "Birmingham",
   "state": " MI",
   "brewery": "Griffin Claw Brewing Company",
   "beer": "Mr. Blue Sky"
 },
 {
   "city": "Birmingham",
   "state": " MI",
   "brewery": "Griffin Claw Brewing Company",
   "beer": "3 Scrooges"
 },
 {
   "city": "Birmingham",
   "state": " MI",
   "brewery": "Griffin Claw Brewing Company",
   "beer": "Screamin’ Pumpkin"
 },
 {
   "city": "Birmingham",
   "state": " MI",
   "brewery": "Griffin Claw Brewing Company",
   "beer": "Grand Trunk Bohemian Pils"
 },
 {
   "city": "Birmingham",
   "state": " MI",
   "brewery": "Griffin Claw Brewing Company",
   "beer": "El Rojo"
 },
 {
   "city": "Birmingham",
   "state": " MI",
   "brewery": "Griffin Claw Brewing Company",
   "beer": "Norm's Raggedy Ass IPA"
 },
 {
   "city": "Birmingham",
   "state": " MI",
   "brewery": "Griffin Claw Brewing Company",
   "beer": "Grind Line"
 },
 {
   "city": "Birmingham",
   "state": " MI",
   "brewery": "Griffin Claw Brewing Company",
   "beer": "Norm's Gateway IPA"
 },
 {
   "city": "Birmingham",
   "state": " MI",
   "brewery": "Griffin Claw Brewing Company",
   "beer": "Lemon Shandy Tripel"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Karbach Brewing Company",
   "beer": "Weisse Versa (2012)"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Karbach Brewing Company",
   "beer": "Mother in Lager"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Karbach Brewing Company",
   "beer": "Weekend Warrior Pale Ale"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Karbach Brewing Company",
   "beer": "Karbachtoberfest"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Karbach Brewing Company",
   "beer": "Love Street Summer Seasonal (2014)"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Karbach Brewing Company",
   "beer": "Barn Burner Saison"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Karbach Brewing Company",
   "beer": "Rodeo Clown Double IPA"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Karbach Brewing Company",
   "beer": "Sympathy for the Lager"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Karbach Brewing Company",
   "beer": "Weisse Versa"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Karbach Brewing Company",
   "beer": "Hopadillo India Pale Ale"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Uncle Billy's Brewery and Smokeh...",
   "beer": "The Green Room"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Uncle Billy's Brewery and Smokeh...",
   "beer": "Humbucker Helles"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Deep Ellum Brewing Company",
   "beer": "Neato Bandito"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Deep Ellum Brewing Company",
   "beer": "Oak Cliff Coffee Ale"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Deep Ellum Brewing Company",
   "beer": "Dream Crusher Double IPA"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Deep Ellum Brewing Company",
   "beer": "Deep Ellum Pale Ale"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Deep Ellum Brewing Company",
   "beer": "Double Brown Stout"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Deep Ellum Brewing Company",
   "beer": "Farmhouse Wit"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Deep Ellum Brewing Company",
   "beer": "Rye Pils Session Lager"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Deep Ellum Brewing Company",
   "beer": "Dallas Blonde"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Deep Ellum Brewing Company",
   "beer": "Deep Ellum IPA"
 },
 {
   "city": "Blanco",
   "state": " TX",
   "brewery": "Real Ale Brewing Company",
   "beer": "18th Anniversary Gose"
 },
 {
   "city": "Blanco",
   "state": " TX",
   "brewery": "Real Ale Brewing Company",
   "beer": "White (2015)"
 },
 {
   "city": "Blanco",
   "state": " TX",
   "brewery": "Real Ale Brewing Company",
   "beer": "BLAKKR"
 },
 {
   "city": "Blanco",
   "state": " TX",
   "brewery": "Real Ale Brewing Company",
   "beer": "Firemans #4 Blonde Ale (2013)"
 },
 {
   "city": "Blanco",
   "state": " TX",
   "brewery": "Real Ale Brewing Company",
   "beer": "The Sword Iron Swan Ale"
 },
 {
   "city": "Blanco",
   "state": " TX",
   "brewery": "Real Ale Brewing Company",
   "beer": "Hans' Pils (2015)"
 },
 {
   "city": "Blanco",
   "state": " TX",
   "brewery": "Real Ale Brewing Company",
   "beer": "Four Squared (2015)"
 },
 {
   "city": "Blanco",
   "state": " TX",
   "brewery": "Real Ale Brewing Company",
   "beer": "Firemans #4 Blonde Ale (2015)"
 },
 {
   "city": "St Mary's",
   "state": " PA",
   "brewery": "Straub Brewery",
   "beer": "Straub Beer (Current)"
 },
 {
   "city": "St Mary's",
   "state": " PA",
   "brewery": "Straub Brewery",
   "beer": "American Lager"
 },
 {
   "city": "St Mary's",
   "state": " PA",
   "brewery": "Straub Brewery",
   "beer": "American Amber"
 },
 {
   "city": "St Mary's",
   "state": " PA",
   "brewery": "Straub Brewery",
   "beer": "American Light"
 },
 {
   "city": "Wolcott",
   "state": " CT",
   "brewery": "Shebeen Brewing Company",
   "beer": "Black Hop IPA"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Special (Current)"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Special"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Cascade Pale Ale (2013)"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Special"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Onyx Black Ale"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Beyond The Pale IPA"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Special (2013)"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Special (2012)"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Special Lager"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "St. Benedict's Winter Ale"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Oktoberfest"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Nude Beach Summer Wheat"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Nude Beach Summer Wheat"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Nude Beach Summer Wheat (2011)"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Drop Dead Blonde"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Three Kings Ale"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Oktoberfest"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "2012 Black Ale"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Nude Beach Summer Wheat (2010)"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Cascade Pale Ale"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Amber Classic"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Stevens Point Brewery",
   "beer": "Point Special Lager"
 },
 {
   "city": "Weston",
   "state": " MO",
   "brewery": "Weston Brewing Company",
   "beer": "Royal Lager"
 },
 {
   "city": "Weston",
   "state": " MO",
   "brewery": "Weston Brewing Company",
   "beer": "Rip Van Winkle (Current)"
 },
 {
   "city": "Weston",
   "state": " MO",
   "brewery": "Weston Brewing Company",
   "beer": "O’Malley’s Stout"
 },
 {
   "city": "Weston",
   "state": " MO",
   "brewery": "Weston Brewing Company",
   "beer": "O’Malley’s IPA"
 },
 {
   "city": "Weston",
   "state": " MO",
   "brewery": "Weston Brewing Company",
   "beer": "O’Malley’s Irish Style Cream Ale"
 },
 {
   "city": "Weston",
   "state": " MO",
   "brewery": "Weston Brewing Company",
   "beer": "L'il Lucy's Hot Pepper Ale"
 },
 {
   "city": "Weston",
   "state": " MO",
   "brewery": "Weston Brewing Company",
   "beer": "Drop Kick Ale"
 },
 {
   "city": "Hattiesburg",
   "state": " MS",
   "brewery": "Southern Prohibition Brewing Com...",
   "beer": "2014 IPA Cicada Series"
 },
 {
   "city": "Hattiesburg",
   "state": " MS",
   "brewery": "Southern Prohibition Brewing Com...",
   "beer": "Sinister Minister Black IPA"
 },
 {
   "city": "Hattiesburg",
   "state": " MS",
   "brewery": "Southern Prohibition Brewing Com...",
   "beer": "Jack the Sipper"
 },
 {
   "city": "Hattiesburg",
   "state": " MS",
   "brewery": "Southern Prohibition Brewing Com...",
   "beer": "Devil's Harvest Extra Pale Ale"
 },
 {
   "city": "Hattiesburg",
   "state": " MS",
   "brewery": "Southern Prohibition Brewing Com...",
   "beer": "Suzy B Dirty Blonde Ale"
 },
 {
   "city": "Hattiesburg",
   "state": " MS",
   "brewery": "Southern Prohibition Brewing Com...",
   "beer": "Mississippi Fire Ant"
 },
 {
   "city": "Hattiesburg",
   "state": " MS",
   "brewery": "Southern Prohibition Brewing Com...",
   "beer": "Hipster Breakfast"
 },
 {
   "city": "Hattiesburg",
   "state": " MS",
   "brewery": "Southern Prohibition Brewing Com...",
   "beer": "Suzy B Dirty Blonde Ale"
 },
 {
   "city": "Hattiesburg",
   "state": " MS",
   "brewery": "Southern Prohibition Brewing Com...",
   "beer": "Devil's Harvest Extra Pale Ale"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Axe Head Malt Liquor"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Huber Bock (2014)"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Minhas Light (2012)"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Huber"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Clear Creek Ice"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Clear Creek Ice"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Mountain Crest"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Mountain Crest"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Mountain Creek (2013)"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Boxer"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Boxer Light"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Boxer Ice"
 },
 {
   "city": "Monroe",
   "state": " WI",
   "brewery": "Minhas Craft Brewery",
   "beer": "Boxer"
 },
 {
   "city": "Dillon",
   "state": " CO",
   "brewery": "Pug Ryan's Brewery",
   "beer": "Morning Wood Wheat (Current)"
 },
 {
   "city": "Dillon",
   "state": " CO",
   "brewery": "Pug Ryan's Brewery",
   "beer": "Hideout Helles"
 },
 {
   "city": "Dillon",
   "state": " CO",
   "brewery": "Pug Ryan's Brewery",
   "beer": "Dead Eye Dunkel"
 },
 {
   "city": "Dillon",
   "state": " CO",
   "brewery": "Pug Ryan's Brewery",
   "beer": "Peacemaker Pilsner"
 },
 {
   "city": "Dillon",
   "state": " CO",
   "brewery": "Pug Ryan's Brewery",
   "beer": "Over the Rail Pale Ale"
 },
 {
   "city": "Dillon",
   "state": " CO",
   "brewery": "Pug Ryan's Brewery",
   "beer": "Pallavicini Pilsner (2009)"
 },
 {
   "city": "Dillon",
   "state": " CO",
   "brewery": "Pug Ryan's Brewery",
   "beer": "Morning Wood Wheat (Current)"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Hops & Grains Brewing Company",
   "beer": "Porter Culture"
 },
 {
   "city": "Ada",
   "state": " MI",
   "brewery": "Sietsema Orchards and Cider Mill",
   "beer": "Sietsema Red Label"
 },
 {
   "city": "St Paul",
   "state": " MN",
   "brewery": "Summit Brewing Company",
   "beer": "Extra Pale Ale"
 },
 {
   "city": "Springdale",
   "state": " AR",
   "brewery": "Core Brewing & Distilling Company",
   "beer": "Behemoth"
 },
 {
   "city": "Springdale",
   "state": " AR",
   "brewery": "Core Brewing & Distilling Company",
   "beer": "Arkansas Red"
 },
 {
   "city": "Springdale",
   "state": " AR",
   "brewery": "Core Brewing & Distilling Company",
   "beer": "Core Oatmeal Stout"
 },
 {
   "city": "Springdale",
   "state": " AR",
   "brewery": "Core Brewing & Distilling Company",
   "beer": "Core ESB"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Independence Brewing Company",
   "beer": "Oklahoma Suks"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Independence Brewing Company",
   "beer": "Power & Light"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Independence Brewing Company",
   "beer": "White Rabbit "
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Cubano Espresso"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Operation Homefront"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Wandering Pelican"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Sugar Plum"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Oktoberfest"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Puppy's Breath Porter"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Happening Now"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Hopped on the High Seas (Hop #529)"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Hopped on the High Seas (Calypso)"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Wiregrass Post-Prohibition Ale"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Dry-Hopped On The High Seas Caribbean-Style IPA"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Hopped on the High Seas (Citra)"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Hopped on the High Seas (Ahtanum)"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Gwar Beer"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Tropical Heatwave"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Humidor Series India Pale Ale"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Jai Alai IPA Aged on White Oak"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "José Martí American Porter"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Invasion Pale Ale"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Maduro Brown Ale"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Maduro Brown Ale"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Hotter Than Helles Lager"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Tocobaga Red Ale"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Jai Alai IPA"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Cigar City Brewing Company",
   "beer": "Florida Cracker Belgian Wit"
 },
 {
   "city": "Cold Spring",
   "state": " MN",
   "brewery": "Third Street Brewhouse",
   "beer": "Hunny Do Wheat"
 },
 {
   "city": "Cold Spring",
   "state": " MN",
   "brewery": "Third Street Brewhouse",
   "beer": "Three Way Pale Ale"
 },
 {
   "city": "Cold Spring",
   "state": " MN",
   "brewery": "Third Street Brewhouse",
   "beer": "Rise to the Top"
 },
 {
   "city": "Cold Spring",
   "state": " MN",
   "brewery": "Third Street Brewhouse",
   "beer": "Lost Trout Brown Ale"
 },
 {
   "city": "Providence",
   "state": " RI",
   "brewery": "Narragansett Brewing Company",
   "beer": "Gansett Light"
 },
 {
   "city": "Providence",
   "state": " RI",
   "brewery": "Narragansett Brewing Company",
   "beer": "Bohemian Pils"
 },
 {
   "city": "Providence",
   "state": " RI",
   "brewery": "Narragansett Brewing Company",
   "beer": "Autocrat Coffee Milk Stout"
 },
 {
   "city": "Providence",
   "state": " RI",
   "brewery": "Narragansett Brewing Company",
   "beer": "Narragansett Bohemian Pilsner"
 },
 {
   "city": "Providence",
   "state": " RI",
   "brewery": "Narragansett Brewing Company",
   "beer": "Narragansett Summer Ale"
 },
 {
   "city": "Providence",
   "state": " RI",
   "brewery": "Narragansett Brewing Company",
   "beer": "Narragansett Cream Ale"
 },
 {
   "city": "Providence",
   "state": " RI",
   "brewery": "Narragansett Brewing Company",
   "beer": "Narragansett Summer Ale"
 },
 {
   "city": "Providence",
   "state": " RI",
   "brewery": "Narragansett Brewing Company",
   "beer": "Narragansett Porter"
 },
 {
   "city": "Providence",
   "state": " RI",
   "brewery": "Narragansett Brewing Company",
   "beer": "Narragansett Bock"
 },
 {
   "city": "Providence",
   "state": " RI",
   "brewery": "Narragansett Brewing Company",
   "beer": "Narragansett Fest Lager"
 },
 {
   "city": "Loveland",
   "state": " CO",
   "brewery": "Grimm Brothers Brewhouse",
   "beer": "Little Red Cap"
 },
 {
   "city": "Nantucket",
   "state": " MA",
   "brewery": "Cisco Brewers",
   "beer": "Shark Tracker Light lager"
 },
 {
   "city": "Nantucket",
   "state": " MA",
   "brewery": "Cisco Brewers",
   "beer": "Pumple Drumkin"
 },
 {
   "city": "Nantucket",
   "state": " MA",
   "brewery": "Cisco Brewers",
   "beer": "Grey Lady"
 },
 {
   "city": "Nantucket",
   "state": " MA",
   "brewery": "Cisco Brewers",
   "beer": "Summer of Lager"
 },
 {
   "city": "Nantucket",
   "state": " MA",
   "brewery": "Cisco Brewers",
   "beer": "Indie Pale Ale"
 },
 {
   "city": "Nantucket",
   "state": " MA",
   "brewery": "Cisco Brewers",
   "beer": "Sankaty Light Lager"
 },
 {
   "city": "Nantucket",
   "state": " MA",
   "brewery": "Cisco Brewers",
   "beer": "Whale's Tale Pale Ale"
 },
 {
   "city": "Hayward",
   "state": " WI",
   "brewery": "Angry Minnow",
   "beer": "Charlie's Rye IPA"
 },
 {
   "city": "Cleveland",
   "state": " OH",
   "brewery": "Platform Beer Company",
   "beer": "New Cleveland Palesner"
 },
 {
   "city": "Arvada",
   "state": " CO",
   "brewery": "Odyssey Beerwerks",
   "beer": "Perpetual Darkness"
 },
 {
   "city": "Arvada",
   "state": " CO",
   "brewery": "Odyssey Beerwerks",
   "beer": "Clan Warrior"
 },
 {
   "city": "Arvada",
   "state": " CO",
   "brewery": "Odyssey Beerwerks",
   "beer": "Psycho Penguin Vanilla Porter"
 },
 {
   "city": "Arvada",
   "state": " CO",
   "brewery": "Odyssey Beerwerks",
   "beer": "Heliocentric Hefeweizen"
 },
 {
   "city": "Arvada",
   "state": " CO",
   "brewery": "Odyssey Beerwerks",
   "beer": "Ghose Drifter Pale Ale"
 },
 {
   "city": "Arvada",
   "state": " CO",
   "brewery": "Odyssey Beerwerks",
   "beer": "Ghost Rider Pale Ale (2013)"
 },
 {
   "city": "Arvada",
   "state": " CO",
   "brewery": "Odyssey Beerwerks",
   "beer": "Helios Hefeweizen (2013)"
 },
 {
   "city": "Raleigh",
   "state": " NC",
   "brewery": "Lonerider Brewing Company",
   "beer": "Deadeye Jack"
 },
 {
   "city": "Raleigh",
   "state": " NC",
   "brewery": "Lonerider Brewing Company",
   "beer": "Pistols at Dawn"
 },
 {
   "city": "Raleigh",
   "state": " NC",
   "brewery": "Lonerider Brewing Company",
   "beer": "Peacemaker Pale Ale"
 },
 {
   "city": "Raleigh",
   "state": " NC",
   "brewery": "Lonerider Brewing Company",
   "beer": "Shotgun Betty"
 },
 {
   "city": "Raleigh",
   "state": " NC",
   "brewery": "Lonerider Brewing Company",
   "beer": "Sweet Josie"
 },
 {
   "city": "Eugene",
   "state": " OR",
   "brewery": "Oakshire Brewing",
   "beer": "Watershed IPA"
 },
 {
   "city": "Eugene",
   "state": " OR",
   "brewery": "Oakshire Brewing",
   "beer": "Oakshire Amber Ale"
 },
 {
   "city": "Eugene",
   "state": " OR",
   "brewery": "Oakshire Brewing",
   "beer": "Overcast Espresso Stout"
 },
 {
   "city": "Eugene",
   "state": " OR",
   "brewery": "Oakshire Brewing",
   "beer": "Watershed IPA (2013)"
 },
 {
   "city": "Latrobe",
   "state": " PA",
   "brewery": "Fort Pitt Brewing Company",
   "beer": "Fort Pitt Ale"
 },
 {
   "city": "Baton Rouge",
   "state": " LA",
   "brewery": "Tin Roof Brewing Company",
   "beer": "Turnrow Harvest Ale"
 },
 {
   "city": "Baton Rouge",
   "state": " LA",
   "brewery": "Tin Roof Brewing Company",
   "beer": "Juke Joint IPA"
 },
 {
   "city": "Baton Rouge",
   "state": " LA",
   "brewery": "Tin Roof Brewing Company",
   "beer": "Parade Ground Coffee Porter"
 },
 {
   "city": "Baton Rouge",
   "state": " LA",
   "brewery": "Tin Roof Brewing Company",
   "beer": "Tin Roof Watermelon Wheat"
 },
 {
   "city": "Baton Rouge",
   "state": " LA",
   "brewery": "Tin Roof Brewing Company",
   "beer": "Tin Roof Blonde Ale"
 },
 {
   "city": "Baton Rouge",
   "state": " LA",
   "brewery": "Tin Roof Brewing Company",
   "beer": "Voodoo Bengal Pale Ale"
 },
 {
   "city": "Baton Rouge",
   "state": " LA",
   "brewery": "Tin Roof Brewing Company",
   "beer": "Perfect Tin Amber"
 },
 {
   "city": "Sisters",
   "state": " OR",
   "brewery": "Three Creeks Brewing",
   "beer": "Knotty Blonde Ale"
 },
 {
   "city": "Sisters",
   "state": " OR",
   "brewery": "Three Creeks Brewing",
   "beer": "Fivepine Chocolate Porter"
 },
 {
   "city": "Sisters",
   "state": " OR",
   "brewery": "Three Creeks Brewing",
   "beer": "Hoodoo Voodoo IPA"
 },
 {
   "city": "Corvallis",
   "state": " OR",
   "brewery": "2 Towns Ciderhouse",
   "beer": "Ginja Ninja"
 },
 {
   "city": "Corvallis",
   "state": " OR",
   "brewery": "2 Towns Ciderhouse",
   "beer": "Cherried Away"
 },
 {
   "city": "Corvallis",
   "state": " OR",
   "brewery": "2 Towns Ciderhouse",
   "beer": "Rhubarbarian"
 },
 {
   "city": "Corvallis",
   "state": " OR",
   "brewery": "2 Towns Ciderhouse",
   "beer": "BrightCider"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Hopportunity Knocks IPA"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Pilot Rock Porter"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Caldera Pale Ale"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Lawnmower Lager"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Ashland Amber Ale (2009)"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Caldera IPA (2009)"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Caldera IPA (2007)"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Caldera Pale Ale (2010)"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Caldera Pale Ale (2009)"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Caldera Pale Ale (2005)"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Caldera Pale Ale (2007)"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Caldera Pale Ale (2011)"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Ashland Amber Ale"
 },
 {
   "city": "Ashland",
   "state": " OR",
   "brewery": "Caldera Brewing Company",
   "beer": "Caldera IPA"
 },
 {
   "city": "Lewisburg",
   "state": " WV",
   "brewery": "Greenbrier Valley Brewing Company",
   "beer": "Wild Trail Pale Ale"
 },
 {
   "city": "Lewisburg",
   "state": " WV",
   "brewery": "Greenbrier Valley Brewing Company",
   "beer": "Mothman Black IPA"
 },
 {
   "city": "Phoenix",
   "state": " AZ",
   "brewery": "Phoenix Ale Brewery",
   "beer": "Camelback"
 },
 {
   "city": "Flagstaff",
   "state": " AZ",
   "brewery": "Lumberyard Brewing Company",
   "beer": "Knotty Pine"
 },
 {
   "city": "Flagstaff",
   "state": " AZ",
   "brewery": "Lumberyard Brewing Company",
   "beer": "Lumberyard Pilsner"
 },
 {
   "city": "Flagstaff",
   "state": " AZ",
   "brewery": "Lumberyard Brewing Company",
   "beer": "Lumberyard IPA"
 },
 {
   "city": "Flagstaff",
   "state": " AZ",
   "brewery": "Lumberyard Brewing Company",
   "beer": "Lumberyard Red Ale"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Uinta Brewing Company",
   "beer": "PUNK'N"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Uinta Brewing Company",
   "beer": "Yard Sale Winter Lager"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Uinta Brewing Company",
   "beer": "Trader Session IPA"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Uinta Brewing Company",
   "beer": "Hop Nosh IPA"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Uinta Brewing Company",
   "beer": "SUM'R"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Uinta Brewing Company",
   "beer": "Organic Baba Black Lager"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Uinta Brewing Company",
   "beer": "Hop Notch IPA (2013)"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Uinta Brewing Company",
   "beer": "Cutthroat Pale Ale"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Uinta Brewing Company",
   "beer": "WYLD Extra Pale Ale"
 },
 {
   "city": "Tempe",
   "state": " AZ",
   "brewery": "Four Peaks Brewing Company",
   "beer": "Sunbru Kölsch"
 },
 {
   "city": "Tempe",
   "state": " AZ",
   "brewery": "Four Peaks Brewing Company",
   "beer": "Kilt Lifter Scottish-Style Ale"
 },
 {
   "city": "Tempe",
   "state": " AZ",
   "brewery": "Four Peaks Brewing Company",
   "beer": "Pumpkin Porter"
 },
 {
   "city": "Tempe",
   "state": " AZ",
   "brewery": "Four Peaks Brewing Company",
   "beer": "Four Peaks Peach Ale"
 },
 {
   "city": "Tempe",
   "state": " AZ",
   "brewery": "Four Peaks Brewing Company",
   "beer": "Hop Knot IPA"
 },
 {
   "city": "Tempe",
   "state": " AZ",
   "brewery": "Four Peaks Brewing Company",
   "beer": "Kilt Lifter Scottish-Style Ale (2009)"
 },
 {
   "city": "Tempe",
   "state": " AZ",
   "brewery": "Four Peaks Brewing Company",
   "beer": "Sunbru Kölsch"
 },
 {
   "city": "Fort Worth",
   "state": " TX",
   "brewery": "Martin House Brewing Company",
   "beer": "River House"
 },
 {
   "city": "Fort Worth",
   "state": " TX",
   "brewery": "Martin House Brewing Company",
   "beer": "Pretzel Stout"
 },
 {
   "city": "Fort Worth",
   "state": " TX",
   "brewery": "Martin House Brewing Company",
   "beer": "Rubberneck Red"
 },
 {
   "city": "Fort Worth",
   "state": " TX",
   "brewery": "Martin House Brewing Company",
   "beer": "The Imperial Texan"
 },
 {
   "city": "Fort Worth",
   "state": " TX",
   "brewery": "Martin House Brewing Company",
   "beer": "The Imperial Texan"
 },
 {
   "city": "Fort Worth",
   "state": " TX",
   "brewery": "Martin House Brewing Company",
   "beer": "Day Break 4-Grain Breakfast Beer"
 },
 {
   "city": "Fort Worth",
   "state": " TX",
   "brewery": "Martin House Brewing Company",
   "beer": "River House Saison"
 },
 {
   "city": "Fort Worth",
   "state": " TX",
   "brewery": "Martin House Brewing Company",
   "beer": "There Will Be Stout"
 },
 {
   "city": "Traverse City",
   "state": " MI",
   "brewery": "Right Brain Brewery",
   "beer": "Smooth Operator"
 },
 {
   "city": "Phoenixville",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Homefront IPA"
 },
 {
   "city": "Lansdale",
   "state": " PA",
   "brewery": "Round Guys Brewing",
   "beer": "Sundown"
 },
 {
   "city": "Lansdale",
   "state": " PA",
   "brewery": "Round Guys Brewing",
   "beer": "Sanctified"
 },
 {
   "city": "Lansdale",
   "state": " PA",
   "brewery": "Round Guys Brewing",
   "beer": "Fear of a Brett Planet"
 },
 {
   "city": "Lansdale",
   "state": " PA",
   "brewery": "Round Guys Brewing",
   "beer": "Original Slacker Ale"
 },
 {
   "city": "Lansdale",
   "state": " PA",
   "brewery": "Round Guys Brewing",
   "beer": "Alpha Blackback"
 },
 {
   "city": "Lansdale",
   "state": " PA",
   "brewery": "Round Guys Brewing",
   "beer": "Kiss Off IPA"
 },
 {
   "city": "Lansdale",
   "state": " PA",
   "brewery": "Round Guys Brewing",
   "beer": "Dog Days Summer Ale"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Beer Agent Re-Ignition"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Cherry Ale"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Bourbon Barrel Aged Coconut Porter"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent IPA"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Aurora Lager"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent Blonde Ale"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent Coconut Porter"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent Oktoberfest Lager"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent Brown Ale"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Cherry Ale (1)"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Aurora Lager (2011)"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Frosted Fields Winter Wheat"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent Belgian Style Wit"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Bourbon's Barrel Stout"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent Stout"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent Coconut Porter (2012)"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent Dark Lager"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent Mild Ale"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent IPA (2011)"
 },
 {
   "city": "Aurora",
   "state": " IN",
   "brewery": "Great Crescent Brewery",
   "beer": "Great Crescent Blonde Ale (2011)"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Pinner Throwback IPA"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Centennial State Pale Ale"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Old Chub NITRO"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "The CROWLER™"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "CAN'D AID Foundation"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Icey.P.A."
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "One Nut Brown"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Birth IPA"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Mama's Little Yella Pils"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "oSKAr the G'Rauch"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "oSKAr the G'Rauch"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "The Deuce"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale (10 Year Anniversary)"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale (2012)"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Gordon Imperial Red (2010)"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale (2011)"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale (2010)"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "G'KNIGHT (16 oz.)"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "15th Anniversary Abbey Ale (2012)"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Chaka"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "HGH (Home Grown Hops): Part Duh"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Deviant Dale's IPA"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "One Hit Wonder"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "G'KNIGHT (12 oz.)"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Ten Fidy Imperial Stout"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Mama's Little Yella Pils"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "GUBNA Imperial IPA"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Old Chub"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Gordon Ale (2009)"
 },
 {
   "city": "Longmont",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale"
 },
 {
   "city": "West Chester",
   "state": " PA",
   "brewery": "Boxcar Brewing Company",
   "beer": "1492"
 },
 {
   "city": "West Chester",
   "state": " PA",
   "brewery": "Boxcar Brewing Company",
   "beer": "Mango Ginger"
 },
 {
   "city": "West Chester",
   "state": " PA",
   "brewery": "Boxcar Brewing Company",
   "beer": "Passenger"
 },
 {
   "city": "Windsor",
   "state": " CO",
   "brewery": "High Hops Brewery",
   "beer": "The Golden One"
 },
 {
   "city": "Windsor",
   "state": " CO",
   "brewery": "High Hops Brewery",
   "beer": "The Power of Zeus"
 },
 {
   "city": "Garden City",
   "state": " ID",
   "brewery": "Crooked Fence Brewing Company",
   "beer": "Aviator Raspberry Blonde"
 },
 {
   "city": "Garden City",
   "state": " ID",
   "brewery": "Crooked Fence Brewing Company",
   "beer": "3 Picket Porter"
 },
 {
   "city": "Garden City",
   "state": " ID",
   "brewery": "Crooked Fence Brewing Company",
   "beer": "Rusty Nail Pale Ale"
 },
 {
   "city": "White Salmon",
   "state": " WA",
   "brewery": "Everybody's Brewing",
   "beer": "Little Sister India Style Session Ale"
 },
 {
   "city": "White Salmon",
   "state": " WA",
   "brewery": "Everybody's Brewing",
   "beer": "Country Boy IPA"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Blood Orange Gose"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Keebarlin' Pale Ale"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "the Kimmie, the Yink and the Holy Gose"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Fall Hornin'"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Barney Flats Oatmeal Stout"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Summer Solstice"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Hop Ottin' IPA"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Boont Amber Ale"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Barney Flats Oatmeal Stout"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "El Steinber Dark Lager"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Boont Amber Ale (2010)"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Summer Solstice Cerveza Crema (2009)"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Barney Flats Oatmeal Stout (2012)"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Winter Solstice"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Hop Ottin' IPA (2011)"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Boont Amber Ale (2011)"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Summer Solstice (2011)"
 },
 {
   "city": "Boonville",
   "state": " CA",
   "brewery": "Anderson Valley Brewing Company",
   "beer": "Poleeko Gold Pale Ale (2009)"
 },
 {
   "city": "Shelburne",
   "state": " VT",
   "brewery": "Fiddlehead Brewing Company",
   "beer": "Mastermind"
 },
 {
   "city": "Shelburne",
   "state": " VT",
   "brewery": "Fiddlehead Brewing Company",
   "beer": "Hyzer Flip"
 },
 {
   "city": "Shelburne",
   "state": " VT",
   "brewery": "Fiddlehead Brewing Company",
   "beer": "Second Fiddle"
 },
 {
   "city": "Shelburne",
   "state": " VT",
   "brewery": "Fiddlehead Brewing Company",
   "beer": "Hodad Porter"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Evil Twin Brewing",
   "beer": "Nomader Weiss"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Evil Twin Brewing",
   "beer": "Molotov Lite"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Evil Twin Brewing",
   "beer": "Hipster Ale (Two Roads Brewing)"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Evil Twin Brewing",
   "beer": "Bikini Beer"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Evil Twin Brewing",
   "beer": "Hipster Ale (Westbrook Brewing)"
 },
 {
   "city": "New Orleans",
   "state": " LA",
   "brewery": "New Orleans Lager & Ale Brewing ...",
   "beer": "Rebirth Pale Ale"
 },
 {
   "city": "New Orleans",
   "state": " LA",
   "brewery": "New Orleans Lager & Ale Brewing ...",
   "beer": "Irish Channel Stout"
 },
 {
   "city": "New Orleans",
   "state": " LA",
   "brewery": "New Orleans Lager & Ale Brewing ...",
   "beer": "MechaHopzilla"
 },
 {
   "city": "New Orleans",
   "state": " LA",
   "brewery": "New Orleans Lager & Ale Brewing ...",
   "beer": "Hopitoulas IPA"
 },
 {
   "city": "New Orleans",
   "state": " LA",
   "brewery": "New Orleans Lager & Ale Brewing ...",
   "beer": "NOLA Brown Ale"
 },
 {
   "city": "New Orleans",
   "state": " LA",
   "brewery": "New Orleans Lager & Ale Brewing ...",
   "beer": "NOLA Blonde Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "Ball & Chain (2014)"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "Bitter Biker Double IPA"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "God Damn Pigeon Porter"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "Working for the Weekend"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "Angry Adam"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "Freedom Fries"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "Bitter Biker Double IPA"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "Ghost Bike Pale Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "Spiteful IPA"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "Alley Time"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "Fat Badger"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Spiteful Brewing Company",
   "beer": "In the Weeds"
 },
 {
   "city": "Fort Worth",
   "state": " TX",
   "brewery": "Rahr & Sons Brewing Company",
   "beer": "Rahr's Blonde"
 },
 {
   "city": "Fort Worth",
   "state": " TX",
   "brewery": "Rahr & Sons Brewing Company",
   "beer": "Pride of Texas Pale Ale"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Devil's Cup"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Rise of the Phoenix"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Sinister"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Sex and Candy"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Black Exodus"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Lake Street Express"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Foreman"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Jade"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Cone Crusher"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Sophomoric Saison"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Regional Ring Of Fire"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Garce Selé"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Troll Destroyer"
 },
 {
   "city": "Gary",
   "state": " IN",
   "brewery": "18th Street Brewery",
   "beer": "Bitter Bitch"
 },
 {
   "city": "Cambridge",
   "state": " MA",
   "brewery": "Cambridge Brewing Company",
   "beer": "Remain in Light"
 },
 {
   "city": "Cambridge",
   "state": " MA",
   "brewery": "Cambridge Brewing Company",
   "beer": "Flower Child (2014)"
 },
 {
   "city": "Pittsboro",
   "state": " NC",
   "brewery": "Carolina Brewery",
   "beer": "Santa's Secret"
 },
 {
   "city": "Pittsboro",
   "state": " NC",
   "brewery": "Carolina Brewery",
   "beer": "Flagship IPA"
 },
 {
   "city": "Pittsboro",
   "state": " NC",
   "brewery": "Carolina Brewery",
   "beer": "Sky Blue Golden Ale"
 },
 {
   "city": "Waynesville",
   "state": " NC",
   "brewery": "Frog Level Brewing Company",
   "beer": "Salamander Slam"
 },
 {
   "city": "Nellysford",
   "state": " VA",
   "brewery": "Wild Wolf Brewing Company",
   "beer": "Blonde Hunny"
 },
 {
   "city": "Nellysford",
   "state": " VA",
   "brewery": "Wild Wolf Brewing Company",
   "beer": "Wild Wolf Wee Heavy Scottish Style Ale"
 },
 {
   "city": "Nellysford",
   "state": " VA",
   "brewery": "Wild Wolf Brewing Company",
   "beer": "Wild Wolf American Pilsner"
 },
 {
   "city": "Nellysford",
   "state": " VA",
   "brewery": "Wild Wolf Brewing Company",
   "beer": "Alpha Ale"
 },
 {
   "city": "Oklahoma City",
   "state": " OK",
   "brewery": "COOP Ale Works",
   "beer": "Gran Sport"
 },
 {
   "city": "Oklahoma City",
   "state": " OK",
   "brewery": "COOP Ale Works",
   "beer": "Horny Toad Cerveza"
 },
 {
   "city": "Oklahoma City",
   "state": " OK",
   "brewery": "COOP Ale Works",
   "beer": "Native Amber"
 },
 {
   "city": "Oklahoma City",
   "state": " OK",
   "brewery": "COOP Ale Works",
   "beer": "F5 IPA"
 },
 {
   "city": "Oklahoma City",
   "state": " OK",
   "brewery": "COOP Ale Works",
   "beer": "Native Amber (2013)"
 },
 {
   "city": "Oklahoma City",
   "state": " OK",
   "brewery": "COOP Ale Works",
   "beer": "Horny Toad Cerveza (2013)"
 },
 {
   "city": "Columbus",
   "state": " OH",
   "brewery": "Seventh Son Brewing Company",
   "beer": "Seventh Son of a Seventh Son"
 },
 {
   "city": "Columbus",
   "state": " OH",
   "brewery": "Seventh Son Brewing Company",
   "beer": "Stone Fort Brown Ale"
 },
 {
   "city": "Columbus",
   "state": " OH",
   "brewery": "Seventh Son Brewing Company",
   "beer": "Seventh Son Hopped Red Ale"
 },
 {
   "city": "Columbus",
   "state": " OH",
   "brewery": "Seventh Son Brewing Company",
   "beer": "Humulus Nimbus Super Pale Ale"
 },
 {
   "city": "Columbus",
   "state": " OH",
   "brewery": "Seventh Son Brewing Company",
   "beer": "Golden Ratio IPA"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Oasis Texas Brewing Company",
   "beer": "Lake Monster"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Oasis Texas Brewing Company",
   "beer": "London Homesick Ale"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Oasis Texas Brewing Company",
   "beer": "Luchesa Lager"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Oasis Texas Brewing Company",
   "beer": "Slow Ride"
 },
 {
   "city": "Spring Lake",
   "state": " MI",
   "brewery": "Vander Mill Ciders",
   "beer": "Nunica Pine"
 },
 {
   "city": "Spring Lake",
   "state": " MI",
   "brewery": "Vander Mill Ciders",
   "beer": "Ginger Peach"
 },
 {
   "city": "Spring Lake",
   "state": " MI",
   "brewery": "Vander Mill Ciders",
   "beer": "Totally Roasted"
 },
 {
   "city": "Spring Lake",
   "state": " MI",
   "brewery": "Vander Mill Ciders",
   "beer": "Blue Gold"
 },
 {
   "city": "Spring Lake",
   "state": " MI",
   "brewery": "Vander Mill Ciders",
   "beer": "Hard Apple"
 },
 {
   "city": "Paw Paw",
   "state": " MI",
   "brewery": "St. Julian Winery",
   "beer": "Gunga Din"
 },
 {
   "city": "Fredericksburg",
   "state": " TX",
   "brewery": "Pedernales Brewing Company",
   "beer": "Lobo Lito"
 },
 {
   "city": "Fredericksburg",
   "state": " TX",
   "brewery": "Pedernales Brewing Company",
   "beer": "Robert Earl Keen Honey Pils"
 },
 {
   "city": "Springfield",
   "state": " MO",
   "brewery": "Mother's Brewing",
   "beer": "Towhead"
 },
 {
   "city": "Springfield",
   "state": " MO",
   "brewery": "Mother's Brewing",
   "beer": "Lil' Helper"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Modern Monks Brewery",
   "beer": "Monkadelic"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Day Hike Session"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Trailhead ISA"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Immersion Amber"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Evo IPA"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Presidential Pils"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Evolutionary IPA (2012)"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Persnickety Pale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "SoDo Brown Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Immersion Amber Ale (2011)"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Evolutionary IPA (2011)"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Trailhead India Style Session Ale (2011)"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Two Beers Brewing Company",
   "beer": "Panorama Wheat Ale"
 },
 {
   "city": "Jackson",
   "state": " WY",
   "brewery": "Snake River Brewing Company",
   "beer": "Monarch Pilsner"
 },
 {
   "city": "Jackson",
   "state": " WY",
   "brewery": "Snake River Brewing Company",
   "beer": "Snow King Pale Ale"
 },
 {
   "city": "Jackson",
   "state": " WY",
   "brewery": "Snake River Brewing Company",
   "beer": "Zonker Stout"
 },
 {
   "city": "Jackson",
   "state": " WY",
   "brewery": "Snake River Brewing Company",
   "beer": "OB-1 Organic Ale"
 },
 {
   "city": "Jackson",
   "state": " WY",
   "brewery": "Snake River Brewing Company",
   "beer": "Snake River Lager"
 },
 {
   "city": "Jackson",
   "state": " WY",
   "brewery": "Snake River Brewing Company",
   "beer": "Snake River Pale Ale"
 },
 {
   "city": "Jackson",
   "state": " WY",
   "brewery": "Snake River Brewing Company",
   "beer": "Pako’s EyePA"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "Dark Voyage Black IPA (2013)"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "Wisconsin Amber"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "Lake House"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "Ghost Ship White IPA"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "Lake House"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "Mutiny IPA"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "Wisconsin Amber (1998)"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "Island Wheat"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "Wisconsin Amber (2013)"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "U.S. Pale Ale"
 },
 {
   "city": "Middleton",
   "state": " WI",
   "brewery": "Capital Brewery",
   "beer": "Supper Club Lager"
 },
 {
   "city": "Oklahoma City",
   "state": " OK",
   "brewery": "Anthem Brewing Company",
   "beer": "Golden One"
 },
 {
   "city": "Oklahoma City",
   "state": " OK",
   "brewery": "Anthem Brewing Company",
   "beer": "Arjuna"
 },
 {
   "city": "Oklahoma City",
   "state": " OK",
   "brewery": "Anthem Brewing Company",
   "beer": "Uroboros"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "Goodlife Brewing Co.",
   "beer": "Mountain Rescue Pale Ale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Breakside Brewery",
   "beer": "Post Time Kölsch"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Goose Island Brewery Company",
   "beer": "Goose Island India Pale Ale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Burnside Brewing Co.",
   "beer": "Couch Select Lager"
 },
 {
   "city": "Springfield",
   "state": " OR",
   "brewery": "Hop Valley Brewing Company",
   "beer": "Double D Blonde"
 },
 {
   "city": "Springfield",
   "state": " OR",
   "brewery": "Hop Valley Brewing Company",
   "beer": "Festeroo Winter Ale"
 },
 {
   "city": "Springfield",
   "state": " OR",
   "brewery": "Hop Valley Brewing Company",
   "beer": "Proxima IPA"
 },
 {
   "city": "Springfield",
   "state": " OR",
   "brewery": "Hop Valley Brewing Company",
   "beer": "Double D Blonde (2013)"
 },
 {
   "city": "Springfield",
   "state": " OR",
   "brewery": "Hop Valley Brewing Company",
   "beer": "541 American Lager"
 },
 {
   "city": "Springfield",
   "state": " OR",
   "brewery": "Hop Valley Brewing Company",
   "beer": "Alphadelic IPA"
 },
 {
   "city": "Springfield",
   "state": " OR",
   "brewery": "Hop Valley Brewing Company",
   "beer": "Alphadelic IPA (2011)"
 },
 {
   "city": "Springfield",
   "state": " OR",
   "brewery": "Hop Valley Brewing Company",
   "beer": "Double D Blonde (2011)"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "Worthy Brewing Company",
   "beer": "Worthy IPA"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "Worthy Brewing Company",
   "beer": "Easy Day Kolsch"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "Worthy Brewing Company",
   "beer": "Lights Out Vanilla Cream Extra Stout"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "Worthy Brewing Company",
   "beer": "Worthy IPA (2013)"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "Worthy Brewing Company",
   "beer": "Worthy Pale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Occidental Brewing Company",
   "beer": "Occidental Hefeweizen"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Occidental Brewing Company",
   "beer": "Occidental Dunkel"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Occidental Brewing Company",
   "beer": "Occidental Altbier"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Occidental Brewing Company",
   "beer": "Occidental Kölsch"
 },
 {
   "city": "Estacada",
   "state": " OR",
   "brewery": "Fearless Brewing Company",
   "beer": "Loki Red Ale"
 },
 {
   "city": "Estacada",
   "state": " OR",
   "brewery": "Fearless Brewing Company",
   "beer": "Peaches & Cream"
 },
 {
   "city": "Estacada",
   "state": " OR",
   "brewery": "Fearless Brewing Company",
   "beer": "Quaff India Style Session Ale"
 },
 {
   "city": "Estacada",
   "state": " OR",
   "brewery": "Fearless Brewing Company",
   "beer": "Loki Red Ale (2013)"
 },
 {
   "city": "Estacada",
   "state": " OR",
   "brewery": "Fearless Brewing Company",
   "beer": "Mjolnir Imperial IPA"
 },
 {
   "city": "Estacada",
   "state": " OR",
   "brewery": "Fearless Brewing Company",
   "beer": "Fearless Scottish Ale"
 },
 {
   "city": "Bloomington",
   "state": " IN",
   "brewery": "Upland Brewing Company",
   "beer": "Campside Session IPA"
 },
 {
   "city": "Bloomington",
   "state": " IN",
   "brewery": "Upland Brewing Company",
   "beer": "Upland Wheat Ale"
 },
 {
   "city": "Bloomington",
   "state": " IN",
   "brewery": "Upland Brewing Company",
   "beer": "Dragonfly IPA"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Mehana Brewing Co.",
   "beer": "Tsunami IPA"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Mehana Brewing Co.",
   "beer": "Tsunami IPA"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Mehana Brewing Co.",
   "beer": "Humpback Blonde Ale"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Mehana Brewing Co.",
   "beer": "Hawaiian Crow Porter"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Mehana Brewing Co.",
   "beer": "Volcano Red Ale"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Mehana Brewing Co.",
   "beer": "Mauna Kea Pale Ale"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Hawai'i Nui Brewing Co.",
   "beer": "Kaua'i Golden Ale"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Hawai'i Nui Brewing Co.",
   "beer": "Sunset Amber"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Hawai'i Nui Brewing Co.",
   "beer": "Hapa Brown Ale"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Hawai'i Nui Brewing Co.",
   "beer": "Hapa Brown Ale"
 },
 {
   "city": "Hilo",
   "state": " HI",
   "brewery": "Hawai'i Nui Brewing Co.",
   "beer": "Southern Cross"
 },
 {
   "city": "Lafayette",
   "state": " IN",
   "brewery": "People's Brewing Company",
   "beer": "Mound Builder IPA"
 },
 {
   "city": "Lafayette",
   "state": " IN",
   "brewery": "People's Brewing Company",
   "beer": "Amazon Princess IPA"
 },
 {
   "city": "Lafayette",
   "state": " IN",
   "brewery": "People's Brewing Company",
   "beer": "Farmer's Daughter Wheat"
 },
 {
   "city": "Lafayette",
   "state": " IN",
   "brewery": "People's Brewing Company",
   "beer": "People's Pilsner"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "Quick WIT"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "The Optimist"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "Suicide Squeeze IPA"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "Java the Hop"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "Next Adventure Black IPA"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "3-Way IPA (2013)"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "Tender Loving Empire NWPA"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "Quick Wit Belgianesque Ale"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "Sunrise Oatmeal Pale Ale"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "Cavatica Stout"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "1811 Lager"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Fort George Brewery",
   "beer": "Vortex IPA"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Branchline Brewing Company",
   "beer": "Evil Owl"
 },
 {
   "city": "Kalona",
   "state": " IA",
   "brewery": "Kalona Brewing Company",
   "beer": "Sucha Much IPA"
 },
 {
   "city": "Kalona",
   "state": " IA",
   "brewery": "Kalona Brewing Company",
   "beer": "Lewbricator Wheat Dopplebock "
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Modern Times Beer",
   "beer": "City of the Sun"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Modern Times Beer",
   "beer": "Booming Rollers"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Modern Times Beer",
   "beer": "Oneida"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Modern Times Beer",
   "beer": "Aurora "
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Modern Times Beer",
   "beer": "Lomaland"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Modern Times Beer",
   "beer": "Fortunate Islands"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Modern Times Beer",
   "beer": "Black House"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Modern Times Beer",
   "beer": "Blazing World"
 },
 {
   "city": "Evanston",
   "state": " IL",
   "brewery": "Temperance Beer Company",
   "beer": "Smittytown"
 },
 {
   "city": "Evanston",
   "state": " IL",
   "brewery": "Temperance Beer Company",
   "beer": "Greenwood Beach"
 },
 {
   "city": "Evanston",
   "state": " IL",
   "brewery": "Temperance Beer Company",
   "beer": "Gatecrasher"
 },
 {
   "city": "Verona",
   "state": " WI",
   "brewery": "Wisconsin Brewing Company",
   "beer": "#001 Golden Amber Lager"
 },
 {
   "city": "Verona",
   "state": " WI",
   "brewery": "Wisconsin Brewing Company",
   "beer": "#002 American I.P.A."
 },
 {
   "city": "Verona",
   "state": " WI",
   "brewery": "Wisconsin Brewing Company",
   "beer": "#003 Brown & Robust Porter"
 },
 {
   "city": "Verona",
   "state": " WI",
   "brewery": "Wisconsin Brewing Company",
   "beer": "#004 Session I.P.A."
 },
 {
   "city": "Spearfish",
   "state": " SD",
   "brewery": "Crow Peak Brewing Company",
   "beer": "Red Water Irish Style Red"
 },
 {
   "city": "Spearfish",
   "state": " SD",
   "brewery": "Crow Peak Brewing Company",
   "beer": "Mjöllnir"
 },
 {
   "city": "Spearfish",
   "state": " SD",
   "brewery": "Crow Peak Brewing Company",
   "beer": "Bear Butte Nut Brown Ale"
 },
 {
   "city": "Spearfish",
   "state": " SD",
   "brewery": "Crow Peak Brewing Company",
   "beer": "Easy Livin' Summer Ale"
 },
 {
   "city": "Spearfish",
   "state": " SD",
   "brewery": "Crow Peak Brewing Company",
   "beer": "Canyon Cream Ale"
 },
 {
   "city": "Spearfish",
   "state": " SD",
   "brewery": "Crow Peak Brewing Company",
   "beer": "Pile O'Dirt Porter"
 },
 {
   "city": "Spearfish",
   "state": " SD",
   "brewery": "Crow Peak Brewing Company",
   "beer": "11th Hour IPA"
 },
 {
   "city": "Farmers Branch",
   "state": " TX",
   "brewery": "Grapevine Craft Brewery",
   "beer": "Monarch Classic American Wheat"
 },
 {
   "city": "Farmers Branch",
   "state": " TX",
   "brewery": "Grapevine Craft Brewery",
   "beer": "Sir William's English Brown Ale"
 },
 {
   "city": "Farmers Branch",
   "state": " TX",
   "brewery": "Grapevine Craft Brewery",
   "beer": "Lakefire Rye Pale Ale"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Buffalo Bayou Brewing Company",
   "beer": "1836"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Buffalo Bayou Brewing Company",
   "beer": "Summer's Wit"
 },
 {
   "city": "Houston",
   "state": " TX",
   "brewery": "Buffalo Bayou Brewing Company",
   "beer": "More Cowbell"
 },
 {
   "city": "Richmond",
   "state": " TX",
   "brewery": "Texian Brewing Co.",
   "beer": "First Stand"
 },
 {
   "city": "Richmond",
   "state": " TX",
   "brewery": "Texian Brewing Co.",
   "beer": "Battle LIne"
 },
 {
   "city": "Richmond",
   "state": " TX",
   "brewery": "Texian Brewing Co.",
   "beer": "Broken Bridge"
 },
 {
   "city": "Richmond",
   "state": " TX",
   "brewery": "Texian Brewing Co.",
   "beer": "Brutus"
 },
 {
   "city": "Atlanta",
   "state": " GA",
   "brewery": "Orpheus Brewing",
   "beer": "Lyric Ale"
 },
 {
   "city": "Atlanta",
   "state": " GA",
   "brewery": "Orpheus Brewing",
   "beer": "Atalanta"
 },
 {
   "city": "Cherry Hill",
   "state": " NJ",
   "brewery": "Forgotten Boardwalk",
   "beer": "What the Butler Saw"
 },
 {
   "city": "Cherry Hill",
   "state": " NJ",
   "brewery": "Forgotten Boardwalk",
   "beer": "1916 Shore Shiver"
 },
 {
   "city": "Ponderay",
   "state": " ID",
   "brewery": "Laughing Dog Brewing Company",
   "beer": "Laughing Dog Cream Ale"
 },
 {
   "city": "Ponderay",
   "state": " ID",
   "brewery": "Laughing Dog Brewing Company",
   "beer": "Two-One Niner"
 },
 {
   "city": "Ponderay",
   "state": " ID",
   "brewery": "Laughing Dog Brewing Company",
   "beer": "Laughing Dog IPA"
 },
 {
   "city": "Bozeman",
   "state": " MT",
   "brewery": "Bozeman Brewing Company",
   "beer": "Plum St. Porter"
 },
 {
   "city": "Bozeman",
   "state": " MT",
   "brewery": "Bozeman Brewing Company",
   "beer": "Plum St. Porter"
 },
 {
   "city": "Bozeman",
   "state": " MT",
   "brewery": "Bozeman Brewing Company",
   "beer": "Bozone HopZone IPA"
 },
 {
   "city": "Bozeman",
   "state": " MT",
   "brewery": "Bozeman Brewing Company",
   "beer": "Bozone Hefe Weizen"
 },
 {
   "city": "Bozeman",
   "state": " MT",
   "brewery": "Bozeman Brewing Company",
   "beer": "Bozone Select Amber Ale"
 },
 {
   "city": "Broomfield",
   "state": " CO",
   "brewery": "Big Choice Brewing",
   "beer": "Aprè Shred"
 },
 {
   "city": "Broomfield",
   "state": " CO",
   "brewery": "Big Choice Brewing",
   "beer": "Hemlock Double IPA"
 },
 {
   "city": "Broomfield",
   "state": " CO",
   "brewery": "Big Choice Brewing",
   "beer": "West Portal Colorado Common Summer Ale"
 },
 {
   "city": "Broomfield",
   "state": " CO",
   "brewery": "Big Choice Brewing",
   "beer": "Disconnected Red"
 },
 {
   "city": "Odessa",
   "state": " FL",
   "brewery": "Big Storm Brewing Company",
   "beer": "Arcus IPA"
 },
 {
   "city": "Odessa",
   "state": " FL",
   "brewery": "Big Storm Brewing Company",
   "beer": "Wavemaker"
 },
 {
   "city": "Atlantic Highlands",
   "state": " NJ",
   "brewery": "Carton Brewing Company",
   "beer": "Epitome"
 },
 {
   "city": "Atlantic Highlands",
   "state": " NJ",
   "brewery": "Carton Brewing Company",
   "beer": "Monkey Chased the Weasel"
 },
 {
   "city": "Atlantic Highlands",
   "state": " NJ",
   "brewery": "Carton Brewing Company",
   "beer": "077XX"
 },
 {
   "city": "Atlantic Highlands",
   "state": " NJ",
   "brewery": "Carton Brewing Company",
   "beer": "Boat Beer"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "Midnight Sun Brewing Company",
   "beer": "Pleasure Town"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "Midnight Sun Brewing Company",
   "beer": "Pleasure Town IPA"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "Midnight Sun Brewing Company",
   "beer": "Snowshoe White Ale"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "Midnight Sun Brewing Company",
   "beer": "Kodiak Brown Ale"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "Midnight Sun Brewing Company",
   "beer": "Sockeye Red IPA"
 },
 {
   "city": "Middleburg Heights",
   "state": " OH",
   "brewery": "Fat Head's Brewery",
   "beer": "Trail Head"
 },
 {
   "city": "Middleburg Heights",
   "state": " OH",
   "brewery": "Fat Head's Brewery",
   "beer": "Hop Stalker Fresh Hop IPA"
 },
 {
   "city": "Temecula",
   "state": " CA",
   "brewery": "Refuge Brewery",
   "beer": "Blood Orange Wit"
 },
 {
   "city": "Chatham",
   "state": " NY",
   "brewery": "Chatham Brewing",
   "beer": "8 Barrel"
 },
 {
   "city": "Chatham",
   "state": " NY",
   "brewery": "Chatham Brewing",
   "beer": "Oktoberfest"
 },
 {
   "city": "Washington",
   "state": " DC",
   "brewery": "DC Brau Brewing Company",
   "beer": "Stone of Arbroath"
 },
 {
   "city": "Washington",
   "state": " DC",
   "brewery": "DC Brau Brewing Company",
   "beer": "The Tradition"
 },
 {
   "city": "Washington",
   "state": " DC",
   "brewery": "DC Brau Brewing Company",
   "beer": "El Hefe Speaks"
 },
 {
   "city": "Washington",
   "state": " DC",
   "brewery": "DC Brau Brewing Company",
   "beer": "Penn Quarter Porter"
 },
 {
   "city": "Washington",
   "state": " DC",
   "brewery": "DC Brau Brewing Company",
   "beer": "On the Wings of Armageddon"
 },
 {
   "city": "Washington",
   "state": " DC",
   "brewery": "DC Brau Brewing Company",
   "beer": "The Corruption"
 },
 {
   "city": "Washington",
   "state": " DC",
   "brewery": "DC Brau Brewing Company",
   "beer": "The Citizen"
 },
 {
   "city": "Washington",
   "state": " DC",
   "brewery": "DC Brau Brewing Company",
   "beer": "The Public"
 },
 {
   "city": "Lake Geneva",
   "state": " WI",
   "brewery": "Geneva Lake Brewing Company",
   "beer": "No Wake IPA"
 },
 {
   "city": "Lake Geneva",
   "state": " WI",
   "brewery": "Geneva Lake Brewing Company",
   "beer": "Boathouse Blonde"
 },
 {
   "city": "Lake Geneva",
   "state": " WI",
   "brewery": "Geneva Lake Brewing Company",
   "beer": "Cedar Point"
 },
 {
   "city": "Rochester",
   "state": " MI",
   "brewery": "Rochester Mills Brewing Company",
   "beer": "Pine Knob Pilsner"
 },
 {
   "city": "Rochester",
   "state": " MI",
   "brewery": "Rochester Mills Brewing Company",
   "beer": "Cal and Co. Black Cherry Porter"
 },
 {
   "city": "Rochester",
   "state": " MI",
   "brewery": "Rochester Mills Brewing Company",
   "beer": "Lazy Daze Lager"
 },
 {
   "city": "Rochester",
   "state": " MI",
   "brewery": "Rochester Mills Brewing Company",
   "beer": "Rochester Red Ale"
 },
 {
   "city": "Rochester",
   "state": " MI",
   "brewery": "Rochester Mills Brewing Company",
   "beer": "Milkshake Stout"
 },
 {
   "city": "Rochester",
   "state": " MI",
   "brewery": "Rochester Mills Brewing Company",
   "beer": "Cornerstone IPA"
 },
 {
   "city": "Rochester",
   "state": " MI",
   "brewery": "Rochester Mills Brewing Company",
   "beer": "Lazy Daze Lager"
 },
 {
   "city": "Gloucester",
   "state": " MA",
   "brewery": "Cape Ann Brewing Company",
   "beer": "Imperial Pumpkin Stout"
 },
 {
   "city": "Gloucester",
   "state": " MA",
   "brewery": "Cape Ann Brewing Company",
   "beer": "Dead-Eye DIPA"
 },
 {
   "city": "Gloucester",
   "state": " MA",
   "brewery": "Cape Ann Brewing Company",
   "beer": "Fisherman's IPA"
 },
 {
   "city": "Gloucester",
   "state": " MA",
   "brewery": "Cape Ann Brewing Company",
   "beer": "Fisherman's Pils"
 },
 {
   "city": "Gloucester",
   "state": " MA",
   "brewery": "Cape Ann Brewing Company",
   "beer": "Fisherman's Brew"
 },
 {
   "city": "Tucson",
   "state": " AZ",
   "brewery": "Borderlands Brewing Company",
   "beer": "Noche Dulce"
 },
 {
   "city": "Lake Havasu City",
   "state": " AZ",
   "brewery": "College Street Brewhouse and Pub",
   "beer": "Big Blue Van"
 },
 {
   "city": "Henderson",
   "state": " NV",
   "brewery": "Joseph James Brewing Company",
   "beer": "Weize Guy"
 },
 {
   "city": "Henderson",
   "state": " NV",
   "brewery": "Joseph James Brewing Company",
   "beer": "Fox Tail Gluten Free Ale"
 },
 {
   "city": "Henderson",
   "state": " NV",
   "brewery": "Joseph James Brewing Company",
   "beer": "Hop Box Imperial IPA"
 },
 {
   "city": "Henderson",
   "state": " NV",
   "brewery": "Joseph James Brewing Company",
   "beer": "Joseph James American Lager"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "UFO Gingerland"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "The Long Thaw White IPA"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "Honey Cider"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "Harpoon Summer Beer"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "Harpoon IPA"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "UFO Pumpkin"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "Harpoon Octoberfest"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "Harpoon IPA (2012)"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "Harpoon Summer Beer (2012)"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "UFO White"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "Harpoon Summer Beer (2010)"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Harpoon Brewery",
   "beer": "Harpoon IPA (2010)"
 },
 {
   "city": "Bloomfield",
   "state": " CT",
   "brewery": "Back East Brewing Company",
   "beer": "Palate Mallet"
 },
 {
   "city": "Bloomfield",
   "state": " CT",
   "brewery": "Back East Brewing Company",
   "beer": "Back East Porter"
 },
 {
   "city": "Bloomfield",
   "state": " CT",
   "brewery": "Back East Brewing Company",
   "beer": "Back East Golden Ale"
 },
 {
   "city": "Bloomfield",
   "state": " CT",
   "brewery": "Back East Brewing Company",
   "beer": "Misty Mountain IPA"
 },
 {
   "city": "Bloomfield",
   "state": " CT",
   "brewery": "Back East Brewing Company",
   "beer": "Back East Ale"
 },
 {
   "city": "Charlottesville",
   "state": " VA",
   "brewery": "Champion Brewing Company",
   "beer": "Stickin' In My Rye"
 },
 {
   "city": "Charlottesville",
   "state": " VA",
   "brewery": "Champion Brewing Company",
   "beer": "Black Me Stout"
 },
 {
   "city": "Charlottesville",
   "state": " VA",
   "brewery": "Champion Brewing Company",
   "beer": "Killer Kolsch"
 },
 {
   "city": "Charlottesville",
   "state": " VA",
   "brewery": "Champion Brewing Company",
   "beer": "Missile IPA"
 },
 {
   "city": "Lexington",
   "state": " VA",
   "brewery": "Devil's Backbone Brewing Company",
   "beer": "Bravo Four Point"
 },
 {
   "city": "Lexington",
   "state": " VA",
   "brewery": "Devil's Backbone Brewing Company",
   "beer": "Striped Bass Pale Ale"
 },
 {
   "city": "Newburgh",
   "state": " NY",
   "brewery": "Newburgh Brewing Company",
   "beer": "Cream Ale"
 },
 {
   "city": "Memphis",
   "state": " TN",
   "brewery": "Wiseacre Brewing Company",
   "beer": "Tarasque"
 },
 {
   "city": "Memphis",
   "state": " TN",
   "brewery": "Wiseacre Brewing Company",
   "beer": "Ananda India Pale Ale"
 },
 {
   "city": "Memphis",
   "state": " TN",
   "brewery": "Wiseacre Brewing Company",
   "beer": "Tiny Bomb"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Might As Well IPL"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Saison Pamplemousse"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "2020 IPA"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Wolf Among Weeds IPA"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Better Weather IPA"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Point the Way IPA"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Golden Road Hefeweizen"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Heal the Bay IPA"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Point the Way IPA"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Cabrillo Kölsch"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Get Up Offa That Brown"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Burning Bush Smoked IPA"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Wolf Among Weeds IPA (2012)"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Point the Way IPA (2012)"
 },
 {
   "city": "Los Angeles",
   "state": " CA",
   "brewery": "Golden Road Brewing",
   "beer": "Golden Road Hefeweizen (2012)"
 },
 {
   "city": "College Station",
   "state": " TX",
   "brewery": "New Republic Brewing Company",
   "beer": "Skylight"
 },
 {
   "city": "College Station",
   "state": " TX",
   "brewery": "New Republic Brewing Company",
   "beer": "Kadigan"
 },
 {
   "city": "College Station",
   "state": " TX",
   "brewery": "New Republic Brewing Company",
   "beer": "Dammit Jim!"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Infamous Brewing Company",
   "beer": "Infamous IPA"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Infamous Brewing Company",
   "beer": "Hijack"
 },
 {
   "city": "Plant City",
   "state": " FL",
   "brewery": "Two Henrys Brewing Company",
   "beer": "The Gilded Age"
 },
 {
   "city": "Stillwater",
   "state": " MN",
   "brewery": "Lift Bridge Brewing Company",
   "beer": "Getaway"
 },
 {
   "city": "Stillwater",
   "state": " MN",
   "brewery": "Lift Bridge Brewing Company",
   "beer": "Farm Girl Saison"
 },
 {
   "city": "Jackson",
   "state": " MS",
   "brewery": "Lucky Town Brewing Company",
   "beer": "Pub Ale"
 },
 {
   "city": "Jackson",
   "state": " MS",
   "brewery": "Lucky Town Brewing Company",
   "beer": "Ballistic Blonde"
 },
 {
   "city": "Greenville",
   "state": " SC",
   "brewery": "Quest Brewing Company",
   "beer": "Golden Fleece"
 },
 {
   "city": "Greenville",
   "state": " SC",
   "brewery": "Quest Brewing Company",
   "beer": "Smoking Mirror"
 },
 {
   "city": "Athens",
   "state": " GA",
   "brewery": "Creature Comforts",
   "beer": "Tropicalia"
 },
 {
   "city": "Athens",
   "state": " GA",
   "brewery": "Creature Comforts",
   "beer": "Athena"
 },
 {
   "city": "Stamford",
   "state": " CT",
   "brewery": "Half Full Brewery",
   "beer": "Pursuit"
 },
 {
   "city": "Stamford",
   "state": " CT",
   "brewery": "Half Full Brewery",
   "beer": "Half Full Bright Ale"
 },
 {
   "city": "Southampton",
   "state": " NY",
   "brewery": "Southampton Publick House",
   "beer": "Montauk Light"
 },
 {
   "city": "Angola",
   "state": " IN",
   "brewery": "Chapman's Brewing",
   "beer": "Enlighten"
 },
 {
   "city": "Angola",
   "state": " IN",
   "brewery": "Chapman's Brewing",
   "beer": "Ale Cider"
 },
 {
   "city": "Angola",
   "state": " IN",
   "brewery": "Chapman's Brewing",
   "beer": "Pail Ale"
 },
 {
   "city": "Angola",
   "state": " IN",
   "brewery": "Chapman's Brewing",
   "beer": "Englishman"
 },
 {
   "city": "Tucson",
   "state": " AZ",
   "brewery": "Barrio Brewing Company",
   "beer": "Barrio Blanco"
 },
 {
   "city": "Tucson",
   "state": " AZ",
   "brewery": "Barrio Brewing Company",
   "beer": "Barrio Tucson Blonde"
 },
 {
   "city": "Santa Cruz",
   "state": " CA",
   "brewery": "Santa Cruz Mountain Brewing",
   "beer": "Giant DIPA"
 },
 {
   "city": "Santa Cruz",
   "state": " CA",
   "brewery": "Santa Cruz Mountain Brewing",
   "beer": "Dread Brown Ale"
 },
 {
   "city": "Santa Cruz",
   "state": " CA",
   "brewery": "Santa Cruz Mountain Brewing",
   "beer": "Casinos IPA"
 },
 {
   "city": "Frankenmuth",
   "state": " MI",
   "brewery": "Frankenmuth Brewery",
   "beer": "Old Detroit"
 },
 {
   "city": "Frankenmuth",
   "state": " MI",
   "brewery": "Frankenmuth Brewery",
   "beer": "Batch 69 IPA"
 },
 {
   "city": "Frankenmuth",
   "state": " MI",
   "brewery": "Frankenmuth Brewery",
   "beer": "Twisted Helles Summer Lager"
 },
 {
   "city": "Somerset Center",
   "state": " MI",
   "brewery": "Meckley's Cidery",
   "beer": "Bushwhacker Cider"
 },
 {
   "city": "Somerset Center",
   "state": " MI",
   "brewery": "Meckley's Cidery",
   "beer": "Weim-R-Iner"
 },
 {
   "city": "Somerset Center",
   "state": " MI",
   "brewery": "Meckley's Cidery",
   "beer": "Cherry Bomb"
 },
 {
   "city": "Baltimore",
   "state": " MD",
   "brewery": "Stillwater Artisanal Ales",
   "beer": "Brontide"
 },
 {
   "city": "Baltimore",
   "state": " MD",
   "brewery": "Stillwater Artisanal Ales",
   "beer": "Brontide"
 },
 {
   "city": "Baltimore",
   "state": " MD",
   "brewery": "Stillwater Artisanal Ales",
   "beer": "Classique"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Finch's Beer Company",
   "beer": "Hardcore Chimera"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Finch's Beer Company",
   "beer": "Sobek & Set"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Finch's Beer Company",
   "beer": "Nuclear Winter"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Finch's Beer Company",
   "beer": "Wet Hot American Wheat Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Finch's Beer Company",
   "beer": "Secret Stache Stout"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Finch's Beer Company",
   "beer": "Fascist Pig Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Finch's Beer Company",
   "beer": "Cut Throat Pale Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Finch's Beer Company",
   "beer": "Threadless IPA"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Finch's Beer Company",
   "beer": "Cut Throat Pale Ale (2011)"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Finch's Beer Company",
   "beer": "Golden Wing Blonde Ale"
 },
 {
   "city": "South Austin",
   "state": " TX",
   "brewery": "South Austin Brewery",
   "beer": "LuckenBock"
 },
 {
   "city": "South Austin",
   "state": " TX",
   "brewery": "South Austin Brewery",
   "beer": "Texas Pale Ale (TPA)"
 },
 {
   "city": "South Austin",
   "state": " TX",
   "brewery": "South Austin Brewery",
   "beer": "6 String Saison"
 },
 {
   "city": "South Austin",
   "state": " TX",
   "brewery": "South Austin Brewery",
   "beer": "Kol' Beer"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "Bauhaus Brew Labs",
   "beer": "Wagon Party"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "Bauhaus Brew Labs",
   "beer": "Sky-Five"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "Bauhaus Brew Labs",
   "beer": "Stargrazer"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "Bauhaus Brew Labs",
   "beer": "Wonderstuff"
 },
 {
   "city": "Rogers",
   "state": " AR",
   "brewery": "Ozark Beer Company",
   "beer": "Ozark American Pale Ale"
 },
 {
   "city": "Mount Pleasant",
   "state": " MI",
   "brewery": "Mountain Town Brewing Company ",
   "beer": "Train Wreck"
 },
 {
   "city": "Waterbury",
   "state": " VT",
   "brewery": "Otter Creek Brewing",
   "beer": "Overgrown American Pale Ale"
 },
 {
   "city": "Baltimore",
   "state": " MD",
   "brewery": "The Brewer's Art",
   "beer": "Birdhouse Pale Ale"
 },
 {
   "city": "Baltimore",
   "state": " MD",
   "brewery": "The Brewer's Art",
   "beer": "Ozzy"
 },
 {
   "city": "Baltimore",
   "state": " MD",
   "brewery": "The Brewer's Art",
   "beer": "Resurrection"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Denver Beer Company",
   "beer": "Incredible Pedal IPA"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Denver Beer Company",
   "beer": "Graham Cracker Porter"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "Rudie Session IPA"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "Taster's Choice"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "Modus Hoperandi"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "Estival Cream Stout"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "Vernal Minthe Stout"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "Hibernal Vinifera Stout"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "Autumnal Molé Stout"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "Mexican Logger"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "True Blonde Ale"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "Euphoria Pale Ale"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "ESB Special Ale"
 },
 {
   "city": "Durango",
   "state": " CO",
   "brewery": "Ska Brewing Company",
   "beer": "Modus Hoperandi"
 },
 {
   "city": "Albuquerque",
   "state": " NM",
   "brewery": "Tractor Brewing Company",
   "beer": "Almanac IPA"
 },
 {
   "city": "Albuquerque",
   "state": " NM",
   "brewery": "Tractor Brewing Company",
   "beer": "Milk Mustachio Stout"
 },
 {
   "city": "Albuquerque",
   "state": " NM",
   "brewery": "Tractor Brewing Company",
   "beer": "Farmer's Tan Red Ale"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "Peak Organic Brewing Company",
   "beer": "Fresh Cut Pilsner"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "Peak Organic Brewing Company",
   "beer": "Summer Session Ale"
 },
 {
   "city": "Hyannis",
   "state": " MA",
   "brewery": "Cape Cod Beer",
   "beer": "Cape Cod Red"
 },
 {
   "city": "Hyannis",
   "state": " MA",
   "brewery": "Cape Cod Beer",
   "beer": "Beach Blonde"
 },
 {
   "city": "Bridgewater Corners",
   "state": " VT",
   "brewery": "Long Trail Brewing Company",
   "beer": "Long Trail IPA"
 },
 {
   "city": "Bridgewater Corners",
   "state": " VT",
   "brewery": "Long Trail Brewing Company",
   "beer": "Long Trail Ale"
 },
 {
   "city": "Bridgewater Corners",
   "state": " VT",
   "brewery": "Long Trail Brewing Company",
   "beer": "Double Bag"
 },
 {
   "city": "Bridgewater Corners",
   "state": " VT",
   "brewery": "Long Trail Brewing Company",
   "beer": "Blackbeary Wheat"
 },
 {
   "city": "Bridgewater Corners",
   "state": " VT",
   "brewery": "Long Trail Brewing Company",
   "beer": "Long Trail Ale (1)"
 },
 {
   "city": "Shreveport",
   "state": " LA",
   "brewery": "Great Raft Brewing Company",
   "beer": "Commotion APA"
 },
 {
   "city": "Shreveport",
   "state": " LA",
   "brewery": "Great Raft Brewing Company",
   "beer": "Southern Drawl Pale Lager"
 },
 {
   "city": "Juneau",
   "state": " AK",
   "brewery": "Alaskan Brewing Company",
   "beer": "Freeride APA"
 },
 {
   "city": "Juneau",
   "state": " AK",
   "brewery": "Alaskan Brewing Company",
   "beer": "Alaskan Amber"
 },
 {
   "city": "Ipswich",
   "state": " MA",
   "brewery": "Notch Brewing Company",
   "beer": "Left of the Dial IPA"
 },
 {
   "city": "Ipswich",
   "state": " MA",
   "brewery": "Notch Brewing Company",
   "beer": "Notch Session Pils"
 },
 {
   "city": "Waterbury",
   "state": " VT",
   "brewery": "The Alchemist",
   "beer": "Petit Mutant"
 },
 {
   "city": "Waterbury",
   "state": " VT",
   "brewery": "The Alchemist",
   "beer": "The Crusher"
 },
 {
   "city": "Waterbury",
   "state": " VT",
   "brewery": "The Alchemist",
   "beer": "Beelzebub"
 },
 {
   "city": "Waterbury",
   "state": " VT",
   "brewery": "The Alchemist",
   "beer": "Focal Banger"
 },
 {
   "city": "Waterbury",
   "state": " VT",
   "brewery": "The Alchemist",
   "beer": "Heady Topper"
 },
 {
   "city": "Waterbury",
   "state": " VT",
   "brewery": "The Alchemist",
   "beer": "Heady Topper"
 },
 {
   "city": "Charlottesville",
   "state": " VA",
   "brewery": "Three Notch'd Brewing Company",
   "beer": "Hydraulion Red"
 },
 {
   "city": "Charlottesville",
   "state": " VA",
   "brewery": "Three Notch'd Brewing Company",
   "beer": "40 Mile IPA"
 },
 {
   "city": "Cleveland",
   "state": " OH",
   "brewery": "Portside Brewery",
   "beer": "Big Chuck Barleywine"
 },
 {
   "city": "Middlebury",
   "state": " VT",
   "brewery": "Otter Creek Brewing",
   "beer": "Fresh Slice White IPA"
 },
 {
   "city": "Montauk",
   "state": " NY",
   "brewery": "Montauk Brewing Company",
   "beer": "Montauk Summer Ale"
 },
 {
   "city": "Montauk",
   "state": " NY",
   "brewery": "Montauk Brewing Company",
   "beer": "Driftwood Ale"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "Indeed Brewing Company",
   "beer": "Let It Ride IPA"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "Indeed Brewing Company",
   "beer": "Stir Crazy Winter Ale"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "Indeed Brewing Company",
   "beer": "Sweet Yamma Jamma Ale"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "Indeed Brewing Company",
   "beer": "Shenanigans Summer Ale"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "Indeed Brewing Company",
   "beer": "Midnight Ryder"
 },
 {
   "city": "Minneapolis",
   "state": " MN",
   "brewery": "Indeed Brewing Company",
   "beer": "Day Tripper Pale Ale"
 },
 {
   "city": "South Deerfield",
   "state": " MA",
   "brewery": "Berkshire Brewing Company",
   "beer": "Lost Sailor IPA"
 },
 {
   "city": "South Deerfield",
   "state": " MA",
   "brewery": "Berkshire Brewing Company",
   "beer": "Steel Rail Extra Pale Ale"
 },
 {
   "city": "Pawtucket",
   "state": " RI",
   "brewery": "Foolproof Brewing Company",
   "beer": "La Ferme Urbaine Farmhouse Ale"
 },
 {
   "city": "Pawtucket",
   "state": " RI",
   "brewery": "Foolproof Brewing Company",
   "beer": "Backyahd IPA"
 },
 {
   "city": "Pawtucket",
   "state": " RI",
   "brewery": "Foolproof Brewing Company",
   "beer": "Raincloud Robust Porter"
 },
 {
   "city": "Pawtucket",
   "state": " RI",
   "brewery": "Foolproof Brewing Company",
   "beer": "Barstool American Golden Ale"
 },
 {
   "city": "Mill Valley",
   "state": " CA",
   "brewery": "Headlands Brewing Company",
   "beer": "Groupe G"
 },
 {
   "city": "Mill Valley",
   "state": " CA",
   "brewery": "Headlands Brewing Company",
   "beer": "Pt. Bonita Rustic Lager"
 },
 {
   "city": "Mill Valley",
   "state": " CA",
   "brewery": "Headlands Brewing Company",
   "beer": "Hill 88 Double IPA"
 },
 {
   "city": "Ridgefield Park",
   "state": " NJ",
   "brewery": "Bolero Snort Brewery",
   "beer": "Longhop IPA"
 },
 {
   "city": "Ridgefield Park",
   "state": " NJ",
   "brewery": "Bolero Snort Brewery",
   "beer": "Lucky Buck"
 },
 {
   "city": "Kearney",
   "state": " NE",
   "brewery": "Thunderhead Brewing Company",
   "beer": "Leatherhead Red"
 },
 {
   "city": "Kearney",
   "state": " NE",
   "brewery": "Thunderhead Brewing Company",
   "beer": "Cropduster Mid-American IPA"
 },
 {
   "city": "Kearney",
   "state": " NE",
   "brewery": "Thunderhead Brewing Company",
   "beer": "Golden Frau Honey Wheat"
 },
 {
   "city": "Kearney",
   "state": " NE",
   "brewery": "Thunderhead Brewing Company",
   "beer": "Cornstalker Dark Wheat"
 },
 {
   "city": "Hays",
   "state": " KS",
   "brewery": "Defiance Brewing Company",
   "beer": "Thrasher Session India Pale Ale"
 },
 {
   "city": "Hays",
   "state": " KS",
   "brewery": "Defiance Brewing Company",
   "beer": "Gutch English Style Mild Ale"
 },
 {
   "city": "Milwaukee",
   "state": " WI",
   "brewery": "Milwaukee Brewing Company",
   "beer": "Hop Freak"
 },
 {
   "city": "Milwaukee",
   "state": " WI",
   "brewery": "Milwaukee Brewing Company",
   "beer": "Louie's Demise Amber Ale"
 },
 {
   "city": "Milwaukee",
   "state": " WI",
   "brewery": "Milwaukee Brewing Company",
   "beer": "Hop Happy"
 },
 {
   "city": "Milwaukee",
   "state": " WI",
   "brewery": "Milwaukee Brewing Company",
   "beer": "Booyah Farmhouse Ale"
 },
 {
   "city": "Milwaukee",
   "state": " WI",
   "brewery": "Milwaukee Brewing Company",
   "beer": "O-Gii"
 },
 {
   "city": "Milwaukee",
   "state": " WI",
   "brewery": "Milwaukee Brewing Company",
   "beer": "Flaming Damsel Lager (2010)"
 },
 {
   "city": "Milwaukee",
   "state": " WI",
   "brewery": "Milwaukee Brewing Company",
   "beer": "Louie’s Demise Immort-Ale (2010)"
 },
 {
   "city": "Port Clinton",
   "state": " OH",
   "brewery": "Catawba Island Brewing",
   "beer": "Whitecap Wit"
 },
 {
   "city": "Port Clinton",
   "state": " OH",
   "brewery": "Catawba Island Brewing",
   "beer": "Seiche Scottish Ale"
 },
 {
   "city": "Gadsden",
   "state": " AL",
   "brewery": "Back Forty Beer Company",
   "beer": "Truck Stop Honey Brown Ale"
 },
 {
   "city": "Gadsden",
   "state": " AL",
   "brewery": "Back Forty Beer Company",
   "beer": "Naked Pig Pale Ale"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Four Corners Brewing Company",
   "beer": "El Chingon IPA"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Four Corners Brewing Company",
   "beer": "Block Party Robust Porter"
 },
 {
   "city": "Dallas",
   "state": " TX",
   "brewery": "Four Corners Brewing Company",
   "beer": "Local Buzz"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Saint Archer Brewery",
   "beer": "Saint Archer White Ale"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Saint Archer Brewery",
   "beer": "Saint Archer IPA"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Saint Archer Brewery",
   "beer": "Saint Archer Pale Ale"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Saint Archer Brewery",
   "beer": "Saint Archer Blonde"
 },
 {
   "city": "Newport",
   "state": " OR",
   "brewery": "Rogue Ales",
   "beer": "Rogue American Amber Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Hale's Ales",
   "beer": "Supergoose IPA"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Hale's Ales",
   "beer": "Hale's Pale American Ale"
 },
 {
   "city": "Idaho Springs",
   "state": " CO",
   "brewery": "Tommyknocker Brewery",
   "beer": "IPA & a Half"
 },
 {
   "city": "Idaho Springs",
   "state": " CO",
   "brewery": "Tommyknocker Brewery",
   "beer": "Ornery Amber Lager (2003)"
 },
 {
   "city": "Lewiston",
   "state": " ME",
   "brewery": "Baxter Brewing Company",
   "beer": "Tarnation California-Style Lager"
 },
 {
   "city": "Lewiston",
   "state": " ME",
   "brewery": "Baxter Brewing Company",
   "beer": "On the Count of 3 (2015)"
 },
 {
   "city": "Lewiston",
   "state": " ME",
   "brewery": "Baxter Brewing Company",
   "beer": "Summer Swelter"
 },
 {
   "city": "Lewiston",
   "state": " ME",
   "brewery": "Baxter Brewing Company",
   "beer": "Phantom Punch Winter Stout"
 },
 {
   "city": "Lewiston",
   "state": " ME",
   "brewery": "Baxter Brewing Company",
   "beer": "Hayride Autumn Ale"
 },
 {
   "city": "Lewiston",
   "state": " ME",
   "brewery": "Baxter Brewing Company",
   "beer": "Celsius Summer Ale (2012)"
 },
 {
   "city": "Lewiston",
   "state": " ME",
   "brewery": "Baxter Brewing Company",
   "beer": "Amber Road"
 },
 {
   "city": "Lewiston",
   "state": " ME",
   "brewery": "Baxter Brewing Company",
   "beer": "Pamola Xtra Pale Ale"
 },
 {
   "city": "Lewiston",
   "state": " ME",
   "brewery": "Baxter Brewing Company",
   "beer": "Stowaway IPA"
 },
 {
   "city": "Northamtpon",
   "state": " MA",
   "brewery": "Northampton Brewery",
   "beer": "Blue Boots IPA"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Black Shirt Brewing Company",
   "beer": "American India Red Ale"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Black Shirt Brewing Company",
   "beer": "American Red Porter"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Black Shirt Brewing Company",
   "beer": "American Red Saison"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Black Shirt Brewing Company",
   "beer": "Colorado Red Ale"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Wachusett Light IPA"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Green Monsta IPA"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Wachusett IPA"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Strawberry White"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Larry Imperial IPA"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Wachusett Summer"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Country Pale Ale"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Wachusett Light IPA (2013)"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Pumpkan"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Wachusett Blueberry Ale"
 },
 {
   "city": "Westminster",
   "state": " MA",
   "brewery": "Wachusett Brewing Company",
   "beer": "Green Monsta IPA"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Widmer Brothers Brewing Company",
   "beer": "Hefe Lemon"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Widmer Brothers Brewing Company",
   "beer": "Hefe Black"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Widmer Brothers Brewing Company",
   "beer": "Widmer Brothers Hefeweizen"
 },
 {
   "city": "Pittsburgh",
   "state": " PA",
   "brewery": "Hop Farm Brewing Company",
   "beer": "Provision"
 },
 {
   "city": "Pittsburgh",
   "state": " PA",
   "brewery": "Hop Farm Brewing Company",
   "beer": "One Nut Brown"
 },
 {
   "city": "Pittsburgh",
   "state": " PA",
   "brewery": "Hop Farm Brewing Company",
   "beer": "Hop Farm IPA"
 },
 {
   "city": "York",
   "state": " PA",
   "brewery": "Liquid Hero Brewery",
   "beer": "Adam's Stout"
 },
 {
   "city": "York",
   "state": " PA",
   "brewery": "Liquid Hero Brewery",
   "beer": "American Hero"
 },
 {
   "city": "York",
   "state": " PA",
   "brewery": "Liquid Hero Brewery",
   "beer": "Schweet Ale"
 },
 {
   "city": "York",
   "state": " PA",
   "brewery": "Liquid Hero Brewery",
   "beer": "Irregardless IPA"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Our Legacy IPA"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Saranac Shandy"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Our Legacy IPA"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Saranac Golden Pilsener (2003)"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Saranac Adirondack Light (2002)"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "DAX Light (1998)"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Saranac Traditional Lager (2000)"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Pomegranate Wheat (2008)"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Blueberry Blonde Ale"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Saranac White IPA"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Saranac Summer Ale (2011)"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Saranac Pale Ale (12 oz.)"
 },
 {
   "city": "Utica",
   "state": " NY",
   "brewery": "Matt Brewing Company",
   "beer": "Saranac Pale Ale (16 oz.)"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Boston Beer Company",
   "beer": "Porch Rocker"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Boston Beer Company",
   "beer": "Rebel IPA"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Boston Beer Company",
   "beer": "Cold Snap"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Boston Beer Company",
   "beer": "Samuel Adams Winter Lager"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Boston Beer Company",
   "beer": "Boston Lager"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Boston Beer Company",
   "beer": "Boston Lager"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Boston Beer Company",
   "beer": "Samuel Adams Octoberfest"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Boston Beer Company",
   "beer": "Samuel Adams Summer Ale"
 },
 {
   "city": "Boston",
   "state": " MA",
   "brewery": "Boston Beer Company",
   "beer": "Boston Lager"
 },
 {
   "city": "Danville",
   "state": " PA",
   "brewery": "Old Forge Brewing Company",
   "beer": "Hopsmith Pale Lager"
 },
 {
   "city": "Danville",
   "state": " PA",
   "brewery": "Old Forge Brewing Company",
   "beer": "Falling Down Brown Ale"
 },
 {
   "city": "Danville",
   "state": " PA",
   "brewery": "Old Forge Brewing Company",
   "beer": "Resolution Rye Stout"
 },
 {
   "city": "Danville",
   "state": " PA",
   "brewery": "Old Forge Brewing Company",
   "beer": "Plowshare Porter"
 },
 {
   "city": "Danville",
   "state": " PA",
   "brewery": "Old Forge Brewing Company",
   "beer": "Old Forge Pumpkin Ale"
 },
 {
   "city": "Danville",
   "state": " PA",
   "brewery": "Old Forge Brewing Company",
   "beer": "Endless Sun Ale"
 },
 {
   "city": "Danville",
   "state": " PA",
   "brewery": "Old Forge Brewing Company",
   "beer": "Celestial Blonde Ale"
 },
 {
   "city": "Danville",
   "state": " PA",
   "brewery": "Old Forge Brewing Company",
   "beer": "Overbite IPA"
 },
 {
   "city": "Danville",
   "state": " PA",
   "brewery": "Old Forge Brewing Company",
   "beer": "T-Rail Pale Ale"
 },
 {
   "city": "Danville",
   "state": " PA",
   "brewery": "Old Forge Brewing Company",
   "beer": "Endless Summer Ale (2011)"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Utah Brewers Cooperative",
   "beer": "Squatters Full Suspension Pale Ale"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Utah Brewers Cooperative",
   "beer": "Squatters Hop Rising Double IPA"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Utah Brewers Cooperative",
   "beer": "Devastator Double Bock"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Utah Brewers Cooperative",
   "beer": "Wasatch Ghostrider White IPA"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Utah Brewers Cooperative",
   "beer": "Wasatch Ghostrider White IPA (2014)"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Utah Brewers Cooperative",
   "beer": "Wasatch Apricot Hefeweizen"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Utah Brewers Cooperative",
   "beer": "Squatters Hop Rising Double IPA (2014)"
 },
 {
   "city": "Salt Lake City",
   "state": " UT",
   "brewery": "Utah Brewers Cooperative",
   "beer": "Squatters Full Suspension Pale Ale"
 },
 {
   "city": "South Burlington",
   "state": " VT",
   "brewery": "Magic Hat Brewing Company",
   "beer": "#9"
 },
 {
   "city": "South Burlington",
   "state": " VT",
   "brewery": "Magic Hat Brewing Company",
   "beer": "Elder Betty"
 },
 {
   "city": "South Burlington",
   "state": " VT",
   "brewery": "Magic Hat Brewing Company",
   "beer": "#9"
 },
 {
   "city": "Canton",
   "state": " MA",
   "brewery": "Blue Hills Brewery",
   "beer": "Quarter Mile Double IPA"
 },
 {
   "city": "Everett",
   "state": " MA",
   "brewery": "Night Shift Brewing",
   "beer": "Marblehead"
 },
 {
   "city": "Virginia Beach",
   "state": " VA",
   "brewery": "Beach Brewing Company",
   "beer": "Hoptopus Double IPA"
 },
 {
   "city": "Garden City",
   "state": " ID",
   "brewery": "Payette Brewing Company",
   "beer": "Rodeo Rye Pale Ale"
 },
 {
   "city": "Garden City",
   "state": " ID",
   "brewery": "Payette Brewing Company",
   "beer": "Outlaw IPA"
 },
 {
   "city": "Garden City",
   "state": " ID",
   "brewery": "Payette Brewing Company",
   "beer": "North Fork Lager"
 },
 {
   "city": "Garden City",
   "state": " ID",
   "brewery": "Payette Brewing Company",
   "beer": "Payette Pale Ale"
 },
 {
   "city": "Garden City",
   "state": " ID",
   "brewery": "Payette Brewing Company",
   "beer": "Mutton Buster"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Brew Bus Brewing",
   "beer": "You're My Boy, Blue"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Brew Bus Brewing",
   "beer": "Last Stop IPA"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Brew Bus Brewing",
   "beer": "Rollin Dirty Red Ale"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Brew Bus Brewing",
   "beer": "Are Wheat There Yet?"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Thanksgiving Ale"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Double Dagger Imperial IPA"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Dagger Falls IPA"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Dagger Falls IPA"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Socktoberfest"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Hopnoxious Imperial IPA"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Barrel Aged Seven Devils Imperial Stout"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Boise Co-Op Two Score Ale"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Sockeye Belgian Style Summer Ale"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Sockeye Maibock"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Old Devil's Tooth"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Galena Golden"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Hell-Diver Pale Ale"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Woolybugger Wheat"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Power House Porter"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Winterfest"
 },
 {
   "city": "Boise",
   "state": " ID",
   "brewery": "Sockeye Brewing Company",
   "beer": "Dagger Falls IPA"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Pine Street Brewery",
   "beer": "Black Bay Milk Stout"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "Pine Street Brewery",
   "beer": "Atom Splitter Pale Ale"
 },
 {
   "city": "Woodinville",
   "state": " WA",
   "brewery": "Dirty Bucket Brewing Company",
   "beer": "Filthy Hoppin' IPA"
 },
 {
   "city": "Nashville",
   "state": " TN",
   "brewery": "Jackalope Brewing Company",
   "beer": "Thunder Ann"
 },
 {
   "city": "Meridian",
   "state": " ID",
   "brewery": "Slanted Rock Brewing Company",
   "beer": "Iron Butt Red Ale"
 },
 {
   "city": "Meridian",
   "state": " ID",
   "brewery": "Slanted Rock Brewing Company",
   "beer": "Initial Point India Pale Ale"
 },
 {
   "city": "Bucryus",
   "state": " MO",
   "brewery": "Piney River Brewing Company",
   "beer": "Hot Date Ale"
 },
 {
   "city": "Bucryus",
   "state": " MO",
   "brewery": "Piney River Brewing Company",
   "beer": "Masked Bandit IPA"
 },
 {
   "city": "Bucryus",
   "state": " MO",
   "brewery": "Piney River Brewing Company",
   "beer": "Sweet Potato Ale"
 },
 {
   "city": "Bucryus",
   "state": " MO",
   "brewery": "Piney River Brewing Company",
   "beer": "Float Trip Ale"
 },
 {
   "city": "Bucryus",
   "state": " MO",
   "brewery": "Piney River Brewing Company",
   "beer": "Old Tom Porter"
 },
 {
   "city": "Bucryus",
   "state": " MO",
   "brewery": "Piney River Brewing Company",
   "beer": "Black Walnut Wheat"
 },
 {
   "city": "Bucryus",
   "state": " MO",
   "brewery": "Piney River Brewing Company",
   "beer": "McKinney Eddy Amber Ale"
 },
 {
   "city": "Bucryus",
   "state": " MO",
   "brewery": "Piney River Brewing Company",
   "beer": "Missouri Mule India Pale Ale"
 },
 {
   "city": "Avon",
   "state": " IN",
   "brewery": "Cutters Brewing Company",
   "beer": "Lost River Blonde Ale"
 },
 {
   "city": "Avon",
   "state": " IN",
   "brewery": "Cutters Brewing Company",
   "beer": "Monon Wheat"
 },
 {
   "city": "Avon",
   "state": " IN",
   "brewery": "Cutters Brewing Company",
   "beer": "Floyd's Folly"
 },
 {
   "city": "Avon",
   "state": " IN",
   "brewery": "Cutters Brewing Company",
   "beer": "Half Court IPA"
 },
 {
   "city": "Wilmington",
   "state": " DE",
   "brewery": "Iron Hill Brewery & Restaurant",
   "beer": "Appreciation Ale"
 },
 {
   "city": "Belfast",
   "state": " ME",
   "brewery": "Marshall Wharf Brewing Company",
   "beer": "Toughcats IPA"
 },
 {
   "city": "Belfast",
   "state": " ME",
   "brewery": "Marshall Wharf Brewing Company",
   "beer": "Tug Pale Ale"
 },
 {
   "city": "Belfast",
   "state": " ME",
   "brewery": "Marshall Wharf Brewing Company",
   "beer": "Sexy Chaos"
 },
 {
   "city": "Belfast",
   "state": " ME",
   "brewery": "Marshall Wharf Brewing Company",
   "beer": "Ace Hole American Pale Ale"
 },
 {
   "city": "Belfast",
   "state": " ME",
   "brewery": "Marshall Wharf Brewing Company",
   "beer": "Cant Dog Imperial Pale Ale"
 },
 {
   "city": "Williamsburg",
   "state": " MA",
   "brewery": "Banner Beer Company",
   "beer": "All Nighter Ale"
 },
 {
   "city": "Williamsburg",
   "state": " MA",
   "brewery": "Banner Beer Company",
   "beer": "Banner American Rye"
 },
 {
   "city": "Williamsburg",
   "state": " MA",
   "brewery": "Banner Beer Company",
   "beer": "Banner American Ale"
 },
 {
   "city": "Centralia",
   "state": " WA",
   "brewery": "Dick's Brewing Company",
   "beer": "12 Man Pale Ale"
 },
 {
   "city": "Claremont",
   "state": " CA",
   "brewery": "Claremont Craft Ales",
   "beer": "Jacaranada Rye IPA"
 },
 {
   "city": "Lockland",
   "state": " OH",
   "brewery": "Rivertown Brewing Company",
   "beer": "Lil SIPA"
 },
 {
   "city": "Lockland",
   "state": " OH",
   "brewery": "Rivertown Brewing Company",
   "beer": "Hop Bomber Rye Pale Ale"
 },
 {
   "city": "Meadville",
   "state": " PA",
   "brewery": "Voodoo Brewery",
   "beer": "Voodoo Love Child"
 },
 {
   "city": "Meadville",
   "state": " PA",
   "brewery": "Voodoo Brewery",
   "beer": "White Magick of the Sun"
 },
 {
   "city": "Meadville",
   "state": " PA",
   "brewery": "Voodoo Brewery",
   "beer": "Wynona's Big Brown Ale"
 },
 {
   "city": "Meadville",
   "state": " PA",
   "brewery": "Voodoo Brewery",
   "beer": "Gran Met"
 },
 {
   "city": "Meadville",
   "state": " PA",
   "brewery": "Voodoo Brewery",
   "beer": "Good Vibes IPA"
 },
 {
   "city": "Meadville",
   "state": " PA",
   "brewery": "Voodoo Brewery",
   "beer": "Pilzilla"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "D.L. Geary Brewing Company",
   "beer": "Geary's Pale Ale"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "D.L. Geary Brewing Company",
   "beer": "Geary's Summer Ale"
 },
 {
   "city": "Black Mountain",
   "state": " NC",
   "brewery": "Pisgah Brewing Company",
   "beer": "GreyBeard™ IPA"
 },
 {
   "city": "Black Mountain",
   "state": " NC",
   "brewery": "Pisgah Brewing Company",
   "beer": "Pisgah Pale Ale"
 },
 {
   "city": "Croydon",
   "state": " PA",
   "brewery": "Neshaminy Creek Brewing Company",
   "beer": "County Line IPA"
 },
 {
   "city": "Croydon",
   "state": " PA",
   "brewery": "Neshaminy Creek Brewing Company",
   "beer": "Trauger Pilsner"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Morgan Street Brewery",
   "beer": "When Helles Freezes Over"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Morgan Street Brewery",
   "beer": "Morgan Street Oktoberfest"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Morgan Street Brewery",
   "beer": "Honey Wheat"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Morgan Street Brewery",
   "beer": "Black Bear Dark Lager"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Morgan Street Brewery",
   "beer": "Golden Pilsner"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Half Acre Beer Company",
   "beer": "Heyoka IPA"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Half Acre Beer Company",
   "beer": "Guest Lager"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Half Acre Beer Company",
   "beer": "Pony Pilsner"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Half Acre Beer Company",
   "beer": "Akari Shogun American Wheat Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Half Acre Beer Company",
   "beer": "Meat Wave"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Half Acre Beer Company",
   "beer": "Over Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Half Acre Beer Company",
   "beer": "Gossamer Golden Ale"
 },
 {
   "city": "Chicago",
   "state": " IL",
   "brewery": "Half Acre Beer Company",
   "beer": "Daisy Cutter Pale Ale"
 },
 {
   "city": "Burlington",
   "state": " VT",
   "brewery": "The Just Beer Project",
   "beer": "Just IPA"
 },
 {
   "city": "Bronx",
   "state": " NY",
   "brewery": "The Bronx Brewery",
   "beer": "Bronx Summer Pale Ale"
 },
 {
   "city": "Bronx",
   "state": " NY",
   "brewery": "The Bronx Brewery",
   "beer": "Bronx Black Pale Ale"
 },
 {
   "city": "Bronx",
   "state": " NY",
   "brewery": "The Bronx Brewery",
   "beer": "Bronx Pale Ale"
 },
 {
   "city": "Tulsa",
   "state": " OK",
   "brewery": "Dead Armadillo Craft Brewing",
   "beer": "Dead Armadillo Amber Ale"
 },
 {
   "city": "Morganton",
   "state": " NC",
   "brewery": "Catawba Brewing Company",
   "beer": "Farmer Ted's Cream Ale"
 },
 {
   "city": "Morganton",
   "state": " NC",
   "brewery": "Catawba Brewing Company",
   "beer": "Firewater India Pale Ale"
 },
 {
   "city": "Morganton",
   "state": " NC",
   "brewery": "Catawba Brewing Company",
   "beer": "White Zombie Ale"
 },
 {
   "city": "Morganton",
   "state": " NC",
   "brewery": "Catawba Brewing Company",
   "beer": "King Winterbolt Winter Ale"
 },
 {
   "city": "Morganton",
   "state": " NC",
   "brewery": "Catawba Brewing Company",
   "beer": "White Zombie Ale"
 },
 {
   "city": "Morganton",
   "state": " NC",
   "brewery": "Catawba Brewing Company",
   "beer": "Firewater India Pale Ale"
 },
 {
   "city": "Morganton",
   "state": " NC",
   "brewery": "Catawba Brewing Company",
   "beer": "Farmer Ted's Farmhouse Cream Ale"
 },
 {
   "city": "Albuquerque",
   "state": " NM",
   "brewery": "La Cumbre Brewing Company",
   "beer": "A Slice of Hefen"
 },
 {
   "city": "Albuquerque",
   "state": " NM",
   "brewery": "La Cumbre Brewing Company",
   "beer": "Elevated IPA"
 },
 {
   "city": "Diamond Springs",
   "state": " CA",
   "brewery": "David's Ale Works",
   "beer": "Sprocket Blonde Ale (2006)"
 },
 {
   "city": "Diamond Springs",
   "state": " CA",
   "brewery": "David's Ale Works",
   "beer": "Sprocket Pale Ale (2006)"
 },
 {
   "city": "Burlington",
   "state": " VT",
   "brewery": "The Traveler Beer Company",
   "beer": "Curious Traveler Shandy"
 },
 {
   "city": "Fargo",
   "state": " ND",
   "brewery": "Fargo Brewing Company",
   "beer": "Iron Horse Pale Ale"
 },
 {
   "city": "Fargo",
   "state": " ND",
   "brewery": "Fargo Brewing Company",
   "beer": "Stone's Throw IPA"
 },
 {
   "city": "Fargo",
   "state": " ND",
   "brewery": "Fargo Brewing Company",
   "beer": "Wood Chipper India Pale Ale"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Big Sky IPA"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Scape Goat Pale Ale"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Montana Trout Slayer Ale"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Moose Drool Brown Ale"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Powder Hound Winter Ale"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Moose Drool Brown Ale (2011)"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Montana Trout Slayer Ale (2012)"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Big Sky IPA (2012)"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Summer Honey"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Scape Goat Pale Ale (2010)"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Montana Trout Slayer Ale (2009)"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Big Sky Brewing Company",
   "beer": "Moose Drool Brown Ale (2009)"
 },
 {
   "city": "Papillion",
   "state": " NE",
   "brewery": "Nebraska Brewing Company",
   "beer": "Wick For Brains"
 },
 {
   "city": "Papillion",
   "state": " NE",
   "brewery": "Nebraska Brewing Company",
   "beer": "Nebraska India Pale Ale"
 },
 {
   "city": "Papillion",
   "state": " NE",
   "brewery": "Nebraska Brewing Company",
   "beer": "EOS Hefeweizen"
 },
 {
   "city": "Papillion",
   "state": " NE",
   "brewery": "Nebraska Brewing Company",
   "beer": "Brunette Nut Brown Ale"
 },
 {
   "city": "Papillion",
   "state": " NE",
   "brewery": "Nebraska Brewing Company",
   "beer": "Cardinal Pale Ale"
 },
 {
   "city": "St. John's",
   "state": " MI",
   "brewery": "Uncle John's Fruit House Winery",
   "beer": "Uncle John's Apple Cherry Cider"
 },
 {
   "city": "St. John's",
   "state": " MI",
   "brewery": "Uncle John's Fruit House Winery",
   "beer": "Uncle John's Apricot Apple Cider"
 },
 {
   "city": "St. John's",
   "state": " MI",
   "brewery": "Uncle John's Fruit House Winery",
   "beer": "Draught Hard Apple Cider"
 },
 {
   "city": "Worcester",
   "state": " MA",
   "brewery": "Wormtown Brewery",
   "beer": "Be Hoppy IPA"
 },
 {
   "city": "Boynton Beach",
   "state": " FL",
   "brewery": "Due South Brewing Company",
   "beer": "Category 3 IPA"
 },
 {
   "city": "Palisade",
   "state": " CO",
   "brewery": "Palisade Brewing Company",
   "beer": "Hula Hoppie Session IPA"
 },
 {
   "city": "Palisade",
   "state": " CO",
   "brewery": "Palisade Brewing Company",
   "beer": "Dirty Hippie Dark Wheat"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "KelSo Beer Company",
   "beer": "KelSo Nut Brown Lager"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "KelSo Beer Company",
   "beer": "KelSo India Pale Ale"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "KelSo Beer Company",
   "beer": "KelSo Pilsner"
 },
 {
   "city": "Richmond",
   "state": " VA",
   "brewery": "Hardywood Park Craft Brewery",
   "beer": "The Great Return"
 },
 {
   "city": "Richmond",
   "state": " VA",
   "brewery": "Hardywood Park Craft Brewery",
   "beer": "Hardywood Cream Ale"
 },
 {
   "city": "Richmond",
   "state": " VA",
   "brewery": "Hardywood Park Craft Brewery",
   "beer": "Capital Trail Pale Ale"
 },
 {
   "city": "Abingdon",
   "state": " VA",
   "brewery": "Wolf Hills Brewing Company",
   "beer": "Troopers Alley IPA"
 },
 {
   "city": "Erie",
   "state": " PA",
   "brewery": "Lavery Brewing Company",
   "beer": "Madra Allta"
 },
 {
   "city": "Erie",
   "state": " PA",
   "brewery": "Lavery Brewing Company",
   "beer": "Duluchan India Pale Ale"
 },
 {
   "city": "Santee",
   "state": " CA",
   "brewery": "Manzanita Brewing Company",
   "beer": "Chaotic Double IPA"
 },
 {
   "city": "Santee",
   "state": " CA",
   "brewery": "Manzanita Brewing Company",
   "beer": "Manzanita IPA"
 },
 {
   "city": "Santee",
   "state": " CA",
   "brewery": "Manzanita Brewing Company",
   "beer": "Riverwalk Blonde Ale"
 },
 {
   "city": "Santee",
   "state": " CA",
   "brewery": "Manzanita Brewing Company",
   "beer": "Gillespie Brown Ale"
 },
 {
   "city": "Santee",
   "state": " CA",
   "brewery": "Manzanita Brewing Company",
   "beer": "Manzanita Pale Ale"
 },
 {
   "city": "Durham",
   "state": " NC",
   "brewery": "Fullsteam Brewery",
   "beer": "Cack-A-Lacky"
 },
 {
   "city": "South Bend",
   "state": " IN",
   "brewery": "Four Horsemen Brewing Company",
   "beer": "Leprechaun Lager"
 },
 {
   "city": "Green Bay",
   "state": " WI",
   "brewery": "Hinterland Brewery",
   "beer": "White Cap White IPA"
 },
 {
   "city": "San Luis Obispo",
   "state": " CA",
   "brewery": "Central Coast Brewing Company",
   "beer": "Chai Ale"
 },
 {
   "city": "San Luis Obispo",
   "state": " CA",
   "brewery": "Central Coast Brewing Company",
   "beer": "Lucky Day IPA"
 },
 {
   "city": "San Luis Obispo",
   "state": " CA",
   "brewery": "Central Coast Brewing Company",
   "beer": "Terrace Hill Double IPA"
 },
 {
   "city": "San Luis Obispo",
   "state": " CA",
   "brewery": "Central Coast Brewing Company",
   "beer": "Catch 23"
 },
 {
   "city": "Westfield",
   "state": " MA",
   "brewery": "Westfield River Brewing Company",
   "beer": "Westfield Octoberfest"
 },
 {
   "city": "Westfield",
   "state": " MA",
   "brewery": "Westfield River Brewing Company",
   "beer": "Pop's Old Fashioned Lager"
 },
 {
   "city": "Westfield",
   "state": " MA",
   "brewery": "Westfield River Brewing Company",
   "beer": "Charlie in the Rye"
 },
 {
   "city": "Columbus",
   "state": " OH",
   "brewery": "Elevator Brewing Company",
   "beer": "Bleeding Buckeye Red Ale"
 },
 {
   "city": "Bellingham",
   "state": " WA",
   "brewery": "Aslan Brewing Company",
   "beer": "Aslan Kölsch"
 },
 {
   "city": "Bellingham",
   "state": " WA",
   "brewery": "Aslan Brewing Company",
   "beer": "Aslan IPA"
 },
 {
   "city": "Bellingham",
   "state": " WA",
   "brewery": "Aslan Brewing Company",
   "beer": "Aslan Amber"
 },
 {
   "city": "Bellingham",
   "state": " WA",
   "brewery": "Kulshan Brewery",
   "beer": "Bellingham Beer Week 2013 Collaboration"
 },
 {
   "city": "Monument",
   "state": " CO",
   "brewery": "Pikes Peak Brewing Company",
   "beer": "Local 5 Pale Ale"
 },
 {
   "city": "Monument",
   "state": " CO",
   "brewery": "Pikes Peak Brewing Company",
   "beer": "Devils Head Red Ale"
 },
 {
   "city": "Monument",
   "state": " CO",
   "brewery": "Pikes Peak Brewing Company",
   "beer": "Elephant Rock IPA"
 },
 {
   "city": "Philadelphia",
   "state": " PA",
   "brewery": "Manayunk Brewing Company",
   "beer": "Festivus (1)"
 },
 {
   "city": "Philadelphia",
   "state": " PA",
   "brewery": "Manayunk Brewing Company",
   "beer": "Manayunk Oktoberfest"
 },
 {
   "city": "Philadelphia",
   "state": " PA",
   "brewery": "Manayunk Brewing Company",
   "beer": "Belgian Style Session Ale"
 },
 {
   "city": "Philadelphia",
   "state": " PA",
   "brewery": "Manayunk Brewing Company",
   "beer": "Manayunk IPA"
 },
 {
   "city": "Philadelphia",
   "state": " PA",
   "brewery": "Manayunk Brewing Company",
   "beer": "Yunkin' Punkin'"
 },
 {
   "city": "Philadelphia",
   "state": " PA",
   "brewery": "Manayunk Brewing Company",
   "beer": "Summer Paradise"
 },
 {
   "city": "Philadelphia",
   "state": " PA",
   "brewery": "Manayunk Brewing Company",
   "beer": "Monk from the 'Yunk"
 },
 {
   "city": "Philadelphia",
   "state": " PA",
   "brewery": "Manayunk Brewing Company",
   "beer": "Schuylkill Punch"
 },
 {
   "city": "Philadelphia",
   "state": " PA",
   "brewery": "Manayunk Brewing Company",
   "beer": "Dreamin' Double IPA"
 },
 {
   "city": "Cleveland",
   "state": " OH",
   "brewery": "Buckeye Brewing",
   "beer": "Cleveland Beer Week 2013"
 },
 {
   "city": "Shelbyville",
   "state": " IN",
   "brewery": "Daredevil Brewing Company",
   "beer": "Lift Off IPA"
 },
 {
   "city": "Charlotte",
   "state": " NC",
   "brewery": "NoDa Brewing Company",
   "beer": "Jam Session"
 },
 {
   "city": "Charlotte",
   "state": " NC",
   "brewery": "NoDa Brewing Company",
   "beer": "Hop Drop 'N Roll IPA"
 },
 {
   "city": "Fuquay-Varina",
   "state": " NC",
   "brewery": "Aviator Brewing Company",
   "beer": "Pumpkin Beast"
 },
 {
   "city": "Fuquay-Varina",
   "state": " NC",
   "brewery": "Aviator Brewing Company",
   "beer": "OktoberBeast"
 },
 {
   "city": "Fuquay-Varina",
   "state": " NC",
   "brewery": "Aviator Brewing Company",
   "beer": "Mad Beach"
 },
 {
   "city": "Fuquay-Varina",
   "state": " NC",
   "brewery": "Aviator Brewing Company",
   "beer": "Hog Wild India Pale Ale"
 },
 {
   "city": "Fuquay-Varina",
   "state": " NC",
   "brewery": "Aviator Brewing Company",
   "beer": "Devils Tramping Ground Tripel"
 },
 {
   "city": "Fuquay-Varina",
   "state": " NC",
   "brewery": "Aviator Brewing Company",
   "beer": "Hot Rod Red"
 },
 {
   "city": "Lake Barrington",
   "state": " IL",
   "brewery": "Wild Onion Brewing Company",
   "beer": "Hop Slayer Double IPA"
 },
 {
   "city": "Lake Barrington",
   "state": " IL",
   "brewery": "Wild Onion Brewing Company",
   "beer": "Pumpkin Ale"
 },
 {
   "city": "Lake Barrington",
   "state": " IL",
   "brewery": "Wild Onion Brewing Company",
   "beer": "Big Bowl Blonde Ale"
 },
 {
   "city": "Lake Barrington",
   "state": " IL",
   "brewery": "Wild Onion Brewing Company",
   "beer": "Phat Chance"
 },
 {
   "city": "Lake Barrington",
   "state": " IL",
   "brewery": "Wild Onion Brewing Company",
   "beer": "Hop Slayer Double IPA (2011)"
 },
 {
   "city": "Lake Barrington",
   "state": " IL",
   "brewery": "Wild Onion Brewing Company",
   "beer": "Hop Slayer Double IPA (2011)"
 },
 {
   "city": "Lake Barrington",
   "state": " IL",
   "brewery": "Wild Onion Brewing Company",
   "beer": "Wild Onion Summer Wit"
 },
 {
   "city": "Lake Barrington",
   "state": " IL",
   "brewery": "Wild Onion Brewing Company",
   "beer": "Jack Stout"
 },
 {
   "city": "Lake Barrington",
   "state": " IL",
   "brewery": "Wild Onion Brewing Company",
   "beer": "Wild Onion Pumpkin Ale (2010)"
 },
 {
   "city": "Lake Barrington",
   "state": " IL",
   "brewery": "Wild Onion Brewing Company",
   "beer": "Paddy Pale Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Hilliard's Beer",
   "beer": "The 12th Can™"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Hilliard's Beer",
   "beer": "Hilliard's Pils"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Hilliard's Beer",
   "beer": "Hilliard's Blonde"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Hilliard's Beer",
   "beer": "Hilliard's Amber Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Hilliard's Beer",
   "beer": "Hilliard's Saison"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Mikkeller",
   "beer": "Keeper (Current)"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Mikkeller",
   "beer": "Better Half"
 },
 {
   "city": "Midvale",
   "state": " UT",
   "brewery": "Bohemian Brewery",
   "beer": "Bohemian Export Lager"
 },
 {
   "city": "Midvale",
   "state": " UT",
   "brewery": "Bohemian Brewery",
   "beer": "Altus Bohemes Altbier"
 },
 {
   "city": "Midvale",
   "state": " UT",
   "brewery": "Bohemian Brewery",
   "beer": "Cherny Bock"
 },
 {
   "city": "Midvale",
   "state": " UT",
   "brewery": "Bohemian Brewery",
   "beer": "Czech Pilsner"
 },
 {
   "city": "Midvale",
   "state": " UT",
   "brewery": "Bohemian Brewery",
   "beer": "Viennese Lager"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Chickawawa Lemonale"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Barrel Aged Farmer"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Great River Golden Ale"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Dirty Blonde Chocolate Ale"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Dos Pistolas"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Owney Irish Style Red Ale"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Aaah Bock Lager"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Widespread Wit"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Roller Dam Red Ale"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "483 Pale Ale"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Hop A Potamus Double Dark Rye Pale Ale"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Farmer Brown Ale"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Big Cock IPA"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Oktoberfest"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "40th Annual Bix Street Fest Copper Ale (Current)"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Redband Stout"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "483 Pale Ale (2010)"
 },
 {
   "city": "Davenport",
   "state": " IA",
   "brewery": "Great River Brewery",
   "beer": "Roller Dam Red Ale (2010)"
 },
 {
   "city": "Mustang",
   "state": " OK",
   "brewery": "Mustang Brewing Company",
   "beer": "Mustang Sixty-Six"
 },
 {
   "city": "Mustang",
   "state": " OK",
   "brewery": "Mustang Brewing Company",
   "beer": "Mustang '33"
 },
 {
   "city": "Mustang",
   "state": " OK",
   "brewery": "Mustang Brewing Company",
   "beer": "Session '33 (2011)"
 },
 {
   "city": "Mustang",
   "state": " OK",
   "brewery": "Mustang Brewing Company",
   "beer": "Mustang Golden Ale"
 },
 {
   "city": "Mustang",
   "state": " OK",
   "brewery": "Mustang Brewing Company",
   "beer": "Washita Wheat"
 },
 {
   "city": "Kent",
   "state": " WA",
   "brewery": "Airways Brewing Company",
   "beer": "Maylani's Coconut Stout"
 },
 {
   "city": "Kent",
   "state": " WA",
   "brewery": "Airways Brewing Company",
   "beer": "Oatmeal PSA"
 },
 {
   "city": "Kent",
   "state": " WA",
   "brewery": "Airways Brewing Company",
   "beer": "Pre Flight Pilsner"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "He Said Baltic-Style Porter"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "He Said Belgian-Style Tripel"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Lower De Boom"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Fireside Chat"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Marooned On Hog Island"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Bitter American"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Hell or High Watermelon Wheat (2009)"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Hell or High Watermelon Wheat (2009)"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "21st Amendment Watermelon Wheat Beer (2006)"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "21st Amendment IPA (2006)"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Brew Free! or Die IPA (2008)"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Brew Free! or Die IPA (2009)"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Special Edition: Allies Win The War!"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Hop Crisis"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Bitter American (2011)"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Fireside Chat (2010)"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Back in Black"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Monk's Blood"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Brew Free! or Die IPA"
 },
 {
   "city": "San Francisco",
   "state": " CA",
   "brewery": "21st Amendment Brewery",
   "beer": "Hell or High Watermelon Wheat"
 },
 {
   "city": "Buena Vista",
   "state": " CO",
   "brewery": "Eddyline Brewery & Restaurant",
   "beer": "Pumpkin Patch Ale"
 },
 {
   "city": "Buena Vista",
   "state": " CO",
   "brewery": "Eddyline Brewery & Restaurant",
   "beer": "Crank Yanker IPA"
 },
 {
   "city": "Buena Vista",
   "state": " CO",
   "brewery": "Eddyline Brewery & Restaurant",
   "beer": "River Runners Pale Ale"
 },
 {
   "city": "Buena Vista",
   "state": " CO",
   "brewery": "Eddyline Brewery & Restaurant",
   "beer": "Pumpkin Patch Ale (2012)"
 },
 {
   "city": "Buena Vista",
   "state": " CO",
   "brewery": "Eddyline Brewery & Restaurant",
   "beer": "Mountain Fairy Raspberry Wheat"
 },
 {
   "city": "Buena Vista",
   "state": " CO",
   "brewery": "Eddyline Brewery & Restaurant",
   "beer": "Boater Beer"
 },
 {
   "city": "Buena Vista",
   "state": " CO",
   "brewery": "Eddyline Brewery & Restaurant",
   "beer": "Crank Yanker IPA (2011)"
 },
 {
   "city": "Carlsbad",
   "state": " CA",
   "brewery": "Pizza Port Brewing Company",
   "beer": "PONTO S.I.P.A."
 },
 {
   "city": "Carlsbad",
   "state": " CA",
   "brewery": "Pizza Port Brewing Company",
   "beer": "Chronic Ale"
 },
 {
   "city": "Carlsbad",
   "state": " CA",
   "brewery": "Pizza Port Brewing Company",
   "beer": "Swami's India Pale Ale"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Sly Fox Christmas Ale 2013"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Grisette"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "360° India Pale Ale"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Helles Golden Lager"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Sly Fox Christmas Ale 2012 (2012)"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Odyssey Imperial IPA"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Oktoberfest Lager"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "113 IPA"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Dunkel Lager"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Royal Weisse Ale"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Pikeland Pils"
 },
 {
   "city": "Pottstown",
   "state": " PA",
   "brewery": "Sly Fox Brewing Company",
   "beer": "Phoenix Pale Ale"
 },
 {
   "city": "Conestoga",
   "state": " PA",
   "brewery": "Spring House Brewing Company",
   "beer": "Seven Gates Pale Ale"
 },
 {
   "city": "Dunedin",
   "state": " FL",
   "brewery": "7venth Sun",
   "beer": "Wolfman's Berliner"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Astoria Brewing Company",
   "beer": "Trolley Stop Stout"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Astoria Brewing Company",
   "beer": "Bitter Bitch Imperial IPA"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Astoria Brewing Company",
   "beer": "Poop Deck Porter"
 },
 {
   "city": "Astoria",
   "state": " OR",
   "brewery": "Astoria Brewing Company",
   "beer": "Old Red Beard Amber Ale"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "Lahaina Town Brown"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "Pau Hana Pilsner"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "Lemongrass Saison"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "Aloha B’ak’tun"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "Liquid Breadfruit"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "Sobrehumano Palena'ole"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "La Perouse White"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "Flyin' HI.P.Hay"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "Mana Wheat"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "Bikini Blonde Lager"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "CoCoNut Porter"
 },
 {
   "city": "Lahaina",
   "state": " HI",
   "brewery": "Maui Brewing Company",
   "beer": "Big Swell IPA"
 },
 {
   "city": "Midwest City",
   "state": " OK",
   "brewery": "RoughTail Brewing Company",
   "beer": "12th Round"
 },
 {
   "city": "Midwest City",
   "state": " OK",
   "brewery": "RoughTail Brewing Company",
   "beer": "RoughTail IPA"
 },
 {
   "city": "Midwest City",
   "state": " OK",
   "brewery": "RoughTail Brewing Company",
   "beer": "Polar Night Stout"
 },
 {
   "city": "Menominee",
   "state": " WI",
   "brewery": "Lucette Brewing Company",
   "beer": "Slow Hand Stout"
 },
 {
   "city": "Jacksonville",
   "state": " FL",
   "brewery": "Bold City Brewery",
   "beer": "Mad Manatee IPA"
 },
 {
   "city": "Jacksonville",
   "state": " FL",
   "brewery": "Bold City Brewery",
   "beer": "Killer Whale Cream Ale"
 },
 {
   "city": "Jacksonville",
   "state": " FL",
   "brewery": "Bold City Brewery",
   "beer": "Duke's Cold Nose Brown Ale"
 },
 {
   "city": "Westerly",
   "state": " RI",
   "brewery": "Grey Sail Brewing of Rhode Island",
   "beer": "Autumn Winds"
 },
 {
   "city": "Westerly",
   "state": " RI",
   "brewery": "Grey Sail Brewing of Rhode Island",
   "beer": "Flying Jenny Extra Pale Ale"
 },
 {
   "city": "Westerly",
   "state": " RI",
   "brewery": "Grey Sail Brewing of Rhode Island",
   "beer": "Hazy Day Belgian-Style Wit"
 },
 {
   "city": "Westerly",
   "state": " RI",
   "brewery": "Grey Sail Brewing of Rhode Island",
   "beer": "Bring Back the Beach Blonde Ale"
 },
 {
   "city": "Westerly",
   "state": " RI",
   "brewery": "Grey Sail Brewing of Rhode Island",
   "beer": "Leaning Chimney Smoked Porter"
 },
 {
   "city": "Westerly",
   "state": " RI",
   "brewery": "Grey Sail Brewing of Rhode Island",
   "beer": "Flying Jenny Extra Pale Ale (2012)"
 },
 {
   "city": "Westerly",
   "state": " RI",
   "brewery": "Grey Sail Brewing of Rhode Island",
   "beer": "Flagship Ale"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "1800 Big Log Wheat (2012)"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "Double Play Pilsner"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "Brewerhood Brown Ale"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "Last Call Imperial Amber Ale"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "Pernicious Double IPA"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "6-4-3 Double Play Pilsner"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "N Street Drive-In 50th Anniversary IPA"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "467 Ethan's Stout"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "1335 Wicked Snout"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "543 Skull Creek Fresh Hopped Pale Ale"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "1327 Pod's ESB"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "1327 Pod's ESB"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "1327 Pod's ESB"
 },
 {
   "city": "Lincoln",
   "state": " NE",
   "brewery": "Blue Blood Brewing Company",
   "beer": "834 Happy As Ale"
 },
 {
   "city": "Manheim",
   "state": " PA",
   "brewery": "Swashbuckler Brewing Company",
   "beer": "Bermuda Triangle Ginger Beer"
 },
 {
   "city": "Afton",
   "state": " VA",
   "brewery": "Blue Mountain Brewery",
   "beer": "Full Nelson Pale Ale"
 },
 {
   "city": "Afton",
   "state": " VA",
   "brewery": "Blue Mountain Brewery",
   "beer": "Steel Wheels ESB"
 },
 {
   "city": "Afton",
   "state": " VA",
   "brewery": "Blue Mountain Brewery",
   "beer": "Blue Mountain Classic Lager"
 },
 {
   "city": "Afton",
   "state": " VA",
   "brewery": "Blue Mountain Brewery",
   "beer": "Full Nelson Pale Ale (2010)"
 },
 {
   "city": "Crozet",
   "state": " VA",
   "brewery": "Starr Hill Brewery",
   "beer": "Starr Pils"
 },
 {
   "city": "Crozet",
   "state": " VA",
   "brewery": "Starr Hill Brewery",
   "beer": "Northern Lights India Pale Ale"
 },
 {
   "city": "Crozet",
   "state": " VA",
   "brewery": "Starr Hill Brewery",
   "beer": "Festie"
 },
 {
   "city": "Crozet",
   "state": " VA",
   "brewery": "Starr Hill Brewery",
   "beer": "Northern Lights India Pale Ale"
 },
 {
   "city": "Mt. Pleasant",
   "state": " SC",
   "brewery": "Westbrook Brewing Company",
   "beer": "One Claw"
 },
 {
   "city": "Mt. Pleasant",
   "state": " SC",
   "brewery": "Westbrook Brewing Company",
   "beer": "Westbrook Gose"
 },
 {
   "city": "Mt. Pleasant",
   "state": " SC",
   "brewery": "Westbrook Brewing Company",
   "beer": "White Thai"
 },
 {
   "city": "Mt. Pleasant",
   "state": " SC",
   "brewery": "Westbrook Brewing Company",
   "beer": "Westbrook IPA"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "Shipyard Brewing Company",
   "beer": "Monkey Fist IPA"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "Shipyard Brewing Company",
   "beer": "Shipyard Summer Ale"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "Shipyard Brewing Company",
   "beer": "Pumpkinhead Ale"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "Shipyard Brewing Company",
   "beer": "Shipyard Export"
 },
 {
   "city": "Paonia",
   "state": " CO",
   "brewery": "Revolution Brewing",
   "beer": "Stout Ol' Friend"
 },
 {
   "city": "Paonia",
   "state": " CO",
   "brewery": "Revolution Brewing",
   "beer": "Stout Ol' Friend (2012)"
 },
 {
   "city": "Paonia",
   "state": " CO",
   "brewery": "Revolution Brewing",
   "beer": "Rye Porter"
 },
 {
   "city": "Paonia",
   "state": " CO",
   "brewery": "Revolution Brewing",
   "beer": "Miner's Gold"
 },
 {
   "city": "Paonia",
   "state": " CO",
   "brewery": "Revolution Brewing",
   "beer": "Vienna Lager"
 },
 {
   "city": "Paonia",
   "state": " CO",
   "brewery": "Revolution Brewing",
   "beer": "Jessie's Garage"
 },
 {
   "city": "Paonia",
   "state": " CO",
   "brewery": "Revolution Brewing",
   "beer": "Colorado Red Ale"
 },
 {
   "city": "Paonia",
   "state": " CO",
   "brewery": "Revolution Brewing",
   "beer": "Miner's Gold"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Natian Brewery",
   "beer": "Undun Blonde Ale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Natian Brewery",
   "beer": "CuDa Cascadian Dark Ale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Natian Brewery",
   "beer": "Old Grogham Imperial India Pale Ale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Natian Brewery",
   "beer": "Old Grogham Imperial India Pale Ale (2012)"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Natian Brewery",
   "beer": "CuDa Cascadian Dark Ale (2012)"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Natian Brewery",
   "beer": "Undun Blonde Ale (2012)"
 },
 {
   "city": "Lexington",
   "state": " KY",
   "brewery": "Alltech's Lexington Brewing Company",
   "beer": "Kentucky Kölsch"
 },
 {
   "city": "Lexington",
   "state": " KY",
   "brewery": "Alltech's Lexington Brewing Company",
   "beer": "Kentucky IPA"
 },
 {
   "city": "Brevard",
   "state": " NC",
   "brewery": "Oskar Blues Brewery (North Carol...",
   "beer": "G'KNIGHT"
 },
 {
   "city": "Brevard",
   "state": " NC",
   "brewery": "Oskar Blues Brewery (North Carol...",
   "beer": "Ten Fidy"
 },
 {
   "city": "Brevard",
   "state": " NC",
   "brewery": "Oskar Blues Brewery (North Carol...",
   "beer": "Deviant Dale's IPA"
 },
 {
   "city": "Brevard",
   "state": " NC",
   "brewery": "Oskar Blues Brewery (North Carol...",
   "beer": "Old Chub"
 },
 {
   "city": "Brevard",
   "state": " NC",
   "brewery": "Oskar Blues Brewery (North Carol...",
   "beer": "Dale's Pale Ale"
 },
 {
   "city": "Brevard",
   "state": " NC",
   "brewery": "Oskar Blues Brewery (North Carol...",
   "beer": "Dale's Pale Ale"
 },
 {
   "city": "Airway Heights",
   "state": " WA",
   "brewery": "Orlison Brewing Company",
   "beer": "Clem's Gold"
 },
 {
   "city": "Airway Heights",
   "state": " WA",
   "brewery": "Orlison Brewing Company",
   "beer": "Lizzy's Red"
 },
 {
   "city": "Airway Heights",
   "state": " WA",
   "brewery": "Orlison Brewing Company",
   "beer": "Orlison India Pale Lager"
 },
 {
   "city": "Airway Heights",
   "state": " WA",
   "brewery": "Orlison Brewing Company",
   "beer": "Brünette"
 },
 {
   "city": "Airway Heights",
   "state": " WA",
   "brewery": "Orlison Brewing Company",
   "beer": "Havanüther"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Breckenridge Brewery",
   "beer": "Agave Wheat"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Breckenridge Brewery",
   "beer": "SummerBright Ale"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Breckenridge Brewery",
   "beer": "Lucky U IPA"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Breckenridge Brewery",
   "beer": "Avalanche Ale"
 },
 {
   "city": "Santa Fe",
   "state": " NM",
   "brewery": "Santa Fe Brewing Company",
   "beer": "Saison 88"
 },
 {
   "city": "Santa Fe",
   "state": " NM",
   "brewery": "Santa Fe Brewing Company",
   "beer": "Black IPA"
 },
 {
   "city": "Santa Fe",
   "state": " NM",
   "brewery": "Santa Fe Brewing Company",
   "beer": "Santa Fe Irish Red Ale"
 },
 {
   "city": "Santa Fe",
   "state": " NM",
   "brewery": "Santa Fe Brewing Company",
   "beer": "Santa Fe Oktoberfest"
 },
 {
   "city": "Santa Fe",
   "state": " NM",
   "brewery": "Santa Fe Brewing Company",
   "beer": "Imperial Java Stout"
 },
 {
   "city": "Santa Fe",
   "state": " NM",
   "brewery": "Santa Fe Brewing Company",
   "beer": "Freestyle Pilsner"
 },
 {
   "city": "Santa Fe",
   "state": " NM",
   "brewery": "Santa Fe Brewing Company",
   "beer": "Happy Camper IPA"
 },
 {
   "city": "Miami",
   "state": " FL",
   "brewery": "Miami Brewing Company",
   "beer": "Shark Bait"
 },
 {
   "city": "Miami",
   "state": " FL",
   "brewery": "Miami Brewing Company",
   "beer": "Gator Tail Brown Ale"
 },
 {
   "city": "Miami",
   "state": " FL",
   "brewery": "Miami Brewing Company",
   "beer": "Miami Vice IPA"
 },
 {
   "city": "Miami",
   "state": " FL",
   "brewery": "Miami Brewing Company",
   "beer": "Big Rod Coconut Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Schilling & Company",
   "beer": "Oak Aged Cider"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Schilling & Company",
   "beer": "Ginger Cider"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Schilling & Company",
   "beer": "Schilling Hard Cider"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Hops & Grain Brewery",
   "beer": "Green House India Pale Ale"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Hops & Grain Brewery",
   "beer": "The One They Call Zoe"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Hops & Grain Brewery",
   "beer": "Alteration"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Hops & Grain Brewery",
   "beer": "Pale Dog"
 },
 {
   "city": "Hudsonville",
   "state": " MI",
   "brewery": "White Flame Brewing Company",
   "beer": "Super G IPA"
 },
 {
   "city": "Sacramento",
   "state": " CA",
   "brewery": "Ruhstaller Beer Company",
   "beer": "1881 California Red"
 },
 {
   "city": "Sacramento",
   "state": " CA",
   "brewery": "Ruhstaller Beer Company",
   "beer": "CAPT Black IPA"
 },
 {
   "city": "Sacramento",
   "state": " CA",
   "brewery": "Ruhstaller Beer Company",
   "beer": "Ruhstaller's Gilt Edge Lager Beer"
 },
 {
   "city": "Sacramento",
   "state": " CA",
   "brewery": "Ruhstaller Beer Company",
   "beer": "CAPT Black IPA"
 },
 {
   "city": "Sacramento",
   "state": " CA",
   "brewery": "Ruhstaller Beer Company",
   "beer": "1881 California Red Ale"
 },
 {
   "city": "Douglas",
   "state": " MI",
   "brewery": "Saugatuck Brewing Company",
   "beer": "Oval Beach Blonde Ale"
 },
 {
   "city": "Moab",
   "state": " UT",
   "brewery": "Moab Brewery",
   "beer": "Squeaky Bike Nut Brown Ale"
 },
 {
   "city": "Moab",
   "state": " UT",
   "brewery": "Moab Brewery",
   "beer": "Dead Horse Amber"
 },
 {
   "city": "Moab",
   "state": " UT",
   "brewery": "Moab Brewery",
   "beer": "Rocket Bike American Lager"
 },
 {
   "city": "Moab",
   "state": " UT",
   "brewery": "Moab Brewery",
   "beer": "Johnny's American IPA"
 },
 {
   "city": "Macon",
   "state": " GA",
   "brewery": "Macon Beer Company",
   "beer": "Macon Progress Ale"
 },
 {
   "city": "Macon",
   "state": " GA",
   "brewery": "Macon Beer Company",
   "beer": "Macon History Ale"
 },
 {
   "city": "Washougal",
   "state": " WA",
   "brewery": "Amnesia Brewing Company",
   "beer": "Dusty Trail Pale Ale"
 },
 {
   "city": "Washougal",
   "state": " WA",
   "brewery": "Amnesia Brewing Company",
   "beer": "Damnesia"
 },
 {
   "city": "Washougal",
   "state": " WA",
   "brewery": "Amnesia Brewing Company",
   "beer": "Desolation IPA"
 },
 {
   "city": "Ann Arbor",
   "state": " MI",
   "brewery": "Wolverine State Brewing Company",
   "beer": "Wolverine Premium Lager"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "Red Tank Cider Company",
   "beer": "Happy Cider"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Cascadia Ciderworks United",
   "beer": "Granny Smith Hard Apple Cider"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Cascadia Ciderworks United",
   "beer": "Dry Hard Apple Cider"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Fate Brewing Company",
   "beer": "Sudice American Stout"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Fate Brewing Company",
   "beer": "Parcae Belgian Style Pale Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Fate Brewing Company",
   "beer": "Norns Roggenbier"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Fate Brewing Company",
   "beer": "Laimas Kölsch Style Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Fate Brewing Company",
   "beer": "Moirai India Pale Ale"
 },
 {
   "city": "Eau Claire",
   "state": " WI",
   "brewery": "Lazy Monk Brewing",
   "beer": "Lazy Monk Bohemian Pilsner"
 },
 {
   "city": "Hamilton",
   "state": " MT",
   "brewery": "Bitter Root Brewing",
   "beer": "Blown Out Brown"
 },
 {
   "city": "Hamilton",
   "state": " MT",
   "brewery": "Bitter Root Brewing",
   "beer": "Single Hop Ale"
 },
 {
   "city": "Hamilton",
   "state": " MT",
   "brewery": "Bitter Root Brewing",
   "beer": "Sawtooth Ale"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "10 Barrel Brewing Company",
   "beer": "Pub Beer"
 },
 {
   "city": "Lakeside",
   "state": " MT",
   "brewery": "Tamarack Brewing Company",
   "beer": "Hat Trick Hop IPA"
 },
 {
   "city": "Lakeside",
   "state": " MT",
   "brewery": "Tamarack Brewing Company",
   "beer": "Yard Sale Amber Ale"
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "Weiss Trash Culture"
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "Sea Hag IPA"
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "Elm City Pilsner"
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "Atlantic Amber Ale (2004)"
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "668 Neighbor of the Beast12 oz."
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "Gandhi-Bot Double IPA (12 oz.)"
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "668 Neighbor of the Beast (16 oz.) (2010)"
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "Gandhi-Bot Double IPA (16 oz.) (2010)"
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "Elm City Lager (2007)"
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "Atlantic Amber Ale (2007)"
 },
 {
   "city": "Woodbridge",
   "state": " CT",
   "brewery": "New England Brewing Company",
   "beer": "Sea Hag IPA (Current)"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Seattle Cider Company",
   "beer": "Dry Cider"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Seattle Cider Company",
   "beer": "Dry Hard Cider"
 },
 {
   "city": "Huntsville",
   "state": " AL",
   "brewery": "Straight to Ale",
   "beer": "Sand Island Lighthouse"
 },
 {
   "city": "Huntsville",
   "state": " AL",
   "brewery": "Straight to Ale",
   "beer": "Lily Flagg Milk Stout"
 },
 {
   "city": "Huntsville",
   "state": " AL",
   "brewery": "Straight to Ale",
   "beer": "Monkeynaut IPA"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Austin Beerworks",
   "beer": "Heavy Machinery IPA Series #1: Heavy Fist"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Austin Beerworks",
   "beer": "Fire Eagle IPA"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Austin Beerworks",
   "beer": "Peacemaker"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Austin Beerworks",
   "beer": "Pearl-Snap"
 },
 {
   "city": "Austin",
   "state": " TX",
   "brewery": "Austin Beerworks",
   "beer": "Black Thunder"
 },
 {
   "city": "Arrington",
   "state": " VA",
   "brewery": "Blue Mountain Brewery",
   "beer": "Kölsch 151"
 },
 {
   "city": "Savannah",
   "state": " GA",
   "brewery": "Coastal Empire Beer Company",
   "beer": "Tybee Island Blonde"
 },
 {
   "city": "Savannah",
   "state": " GA",
   "brewery": "Coastal Empire Beer Company",
   "beer": "Savannah Brown Ale"
 },
 {
   "city": "Biglerville",
   "state": " PA",
   "brewery": "Jack's Hard Cider (Hauser Estate...",
   "beer": "Helen's Blend"
 },
 {
   "city": "Biglerville",
   "state": " PA",
   "brewery": "Jack's Hard Cider (Hauser Estate...",
   "beer": "Jack's Hard Cider"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Boulder Beer Company",
   "beer": "Hazed & Infused"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Boulder Beer Company",
   "beer": "Hoopla Pale Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Boulder Beer Company",
   "beer": "Hazed & Infused (2010)"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Coalition Brewing Company",
   "beer": "Cascadian Dark Ale"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "Coalition Brewing Company",
   "beer": "Wheat the People"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Sanitas Brewing Company",
   "beer": "Sanitas Saison Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Sanitas Brewing Company",
   "beer": "Sanitas Black IPA"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Gore Range Brewery",
   "beer": "Beaver Logger"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Redstone Meadery",
   "beer": "Nectar of the Hops"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Redstone Meadery",
   "beer": "Sunshine Nectar"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Redstone Meadery",
   "beer": "Black Raspberry Nectar"
 },
 {
   "city": "Eugene",
   "state": " OR",
   "brewery": "Blue Dog Mead",
   "beer": "Yellow Collar"
 },
 {
   "city": "Eugene",
   "state": " OR",
   "brewery": "Blue Dog Mead",
   "beer": "Green Collar"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Hess Brewing Company",
   "beer": "Grazias"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Hess Brewing Company",
   "beer": "Habitus IPA"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Hess Brewing Company",
   "beer": "Ex Umbris Rye Imperial Stout"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Wynkoop Brewing Company",
   "beer": "Patty's Chile Beer"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Wynkoop Brewing Company",
   "beer": "Colorojo Imperial Red Ale"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Wynkoop Brewing Company",
   "beer": "Wynkoop Pumpkin Ale"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Wynkoop Brewing Company",
   "beer": "Rocky Mountain Oyster Stout"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Wynkoop Brewing Company",
   "beer": "Belgorado"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Wynkoop Brewing Company",
   "beer": "Rail Yard Ale"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Wynkoop Brewing Company",
   "beer": "B3K Black Lager"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Wynkoop Brewing Company",
   "beer": "Silverback Pale Ale"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "Wynkoop Brewing Company",
   "beer": "Rail Yard Ale (2009)"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Ciderboys",
   "beer": "First Press"
 },
 {
   "city": "Stevens Point",
   "state": " WI",
   "brewery": "Ciderboys",
   "beer": "Magic Apple"
 },
 {
   "city": "Denton",
   "state": " TX",
   "brewery": "Armadillo Ale Works",
   "beer": "Quakertown Stout"
 },
 {
   "city": "Denton",
   "state": " TX",
   "brewery": "Armadillo Ale Works",
   "beer": "Greenbelt Farmhouse Ale"
 },
 {
   "city": "Roanoke",
   "state": " VA",
   "brewery": "Roanoke Railhouse Brewery",
   "beer": "Track 1 Amber Lager"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Schlafly Brewing Company",
   "beer": "Schlafly Yakima Wheat Ale"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Schlafly Brewing Company",
   "beer": "Schlafly Black Lager"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Schlafly Brewing Company",
   "beer": "Schlafly IPA"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Schlafly Brewing Company",
   "beer": "Schlafly American Brown Ale"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Schlafly Brewing Company",
   "beer": "Schlafly Hefeweizen"
 },
 {
   "city": "Saint Louis",
   "state": " MO",
   "brewery": "Schlafly Brewing Company",
   "beer": "Schlafly Summer Lager"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Asher Brewing Company",
   "beer": "Green Bullet Organic India Pale Ale"
 },
 {
   "city": "Ashburn",
   "state": " VA",
   "brewery": "Lost Rhino Brewing Company",
   "beer": "Face Plant IPA"
 },
 {
   "city": "Ashburn",
   "state": " VA",
   "brewery": "Lost Rhino Brewing Company",
   "beer": "Rhino Chasers Pilsner"
 },
 {
   "city": "Slippery Rock",
   "state": " PA",
   "brewery": "North Country Brewing Company",
   "beer": "Paleo IPA"
 },
 {
   "city": "Slippery Rock",
   "state": " PA",
   "brewery": "North Country Brewing Company",
   "beer": "Buck Snort Stout"
 },
 {
   "city": "Slippery Rock",
   "state": " PA",
   "brewery": "North Country Brewing Company",
   "beer": "Station 33 Firehouse Red"
 },
 {
   "city": "Slippery Rock",
   "state": " PA",
   "brewery": "North Country Brewing Company",
   "beer": "Slimy Pebble Pils"
 },
 {
   "city": "Santa Cruz",
   "state": " CA",
   "brewery": "Seabright Brewery",
   "beer": "Blur India Pale Ale"
 },
 {
   "city": "Asheville",
   "state": " NC",
   "brewery": "French Broad Brewery",
   "beer": "Gateway Kolsch Style Ale"
 },
 {
   "city": "Asheville",
   "state": " NC",
   "brewery": "French Broad Brewery",
   "beer": "Wee-Heavy-Er Scotch Ale"
 },
 {
   "city": "Asheville",
   "state": " NC",
   "brewery": "French Broad Brewery",
   "beer": "13 Rebels ESB"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Angry Orchard Cider Company",
   "beer": "Angry Orchard Apple Ginger"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Angry Orchard Cider Company",
   "beer": "Angry Orchard Crisp Apple"
 },
 {
   "city": "Cincinnati",
   "state": " OH",
   "brewery": "Angry Orchard Cider Company",
   "beer": "Angry Orchard Crisp Apple"
 },
 {
   "city": "Stratford",
   "state": " CT",
   "brewery": "Two Roads Brewing Company",
   "beer": "No Limits Hefeweizen"
 },
 {
   "city": "Stratford",
   "state": " CT",
   "brewery": "Two Roads Brewing Company",
   "beer": "Honeyspot Road White IPA"
 },
 {
   "city": "Stratford",
   "state": " CT",
   "brewery": "Two Roads Brewing Company",
   "beer": "Road 2 Ruin Double IPA"
 },
 {
   "city": "Stratford",
   "state": " CT",
   "brewery": "Two Roads Brewing Company",
   "beer": "Workers Comp Saison"
 },
 {
   "city": "Stratford",
   "state": " CT",
   "brewery": "Two Roads Brewing Company",
   "beer": "Ol' Factory Pils"
 },
 {
   "city": "Medford",
   "state": " OR",
   "brewery": "Southern Oregon Brewing Company",
   "beer": "Na Zdraví Pilsner"
 },
 {
   "city": "Medford",
   "state": " OR",
   "brewery": "Southern Oregon Brewing Company",
   "beer": "Nice Rack IPA"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Brooklyn Brewery",
   "beer": "East India Pale Ale"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Brooklyn Brewery",
   "beer": "Brooklyn Summer Ale"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Brooklyn Brewery",
   "beer": "East India Pale Ale"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Brooklyn Brewery",
   "beer": "Brooklyn Summer Ale (2011)"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Brooklyn Brewery",
   "beer": "Brooklyn Lager (16 oz.)"
 },
 {
   "city": "Brooklyn",
   "state": " NY",
   "brewery": "Brooklyn Brewery",
   "beer": "Brooklyn Lager (12 oz.)"
 },
 {
   "city": "Traverse City",
   "state": " MI",
   "brewery": "The Right Brain Brewery",
   "beer": "Northern Hawk Owl Amber"
 },
 {
   "city": "Traverse City",
   "state": " MI",
   "brewery": "The Right Brain Brewery",
   "beer": "CEO Stout"
 },
 {
   "city": "Traverse City",
   "state": " MI",
   "brewery": "The Right Brain Brewery",
   "beer": "Will Power Pale Ale"
 },
 {
   "city": "Kona",
   "state": " HI",
   "brewery": "Kona Brewing Company",
   "beer": "Longboard Island Lager"
 },
 {
   "city": "Kona",
   "state": " HI",
   "brewery": "Kona Brewing Company",
   "beer": "Longboard Island Lager"
 },
 {
   "city": "Kona",
   "state": " HI",
   "brewery": "Kona Brewing Company",
   "beer": "Longboard Island Lager"
 },
 {
   "city": "Kona",
   "state": " HI",
   "brewery": "Kona Brewing Company",
   "beer": "Longboard Island Lager"
 },
 {
   "city": "Royal Oak",
   "state": " MI",
   "brewery": "MillKing It Productions",
   "beer": "SNO White Ale"
 },
 {
   "city": "Royal Oak",
   "state": " MI",
   "brewery": "MillKing It Productions",
   "beer": "BRIK Irish Red Ale"
 },
 {
   "city": "Royal Oak",
   "state": " MI",
   "brewery": "MillKing It Productions",
   "beer": "AXL Pale Ale"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "Pateros Creek Brewing Company",
   "beer": "Rustic Red"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "Pateros Creek Brewing Company",
   "beer": "Stimulator Pale Ale"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "Pateros Creek Brewing Company",
   "beer": "Old Town Ale"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "Pateros Creek Brewing Company",
   "beer": "Car 21"
 },
 {
   "city": "Fort Collins",
   "state": " CO",
   "brewery": "Pateros Creek Brewing Company",
   "beer": "Cache La Porter"
 },
 {
   "city": "O'Fallon",
   "state": " MO",
   "brewery": "O'Fallon Brewery",
   "beer": "O'Fallon Pumpkin Beer"
 },
 {
   "city": "O'Fallon",
   "state": " MO",
   "brewery": "O'Fallon Brewery",
   "beer": "5 Day IPA"
 },
 {
   "city": "O'Fallon",
   "state": " MO",
   "brewery": "O'Fallon Brewery",
   "beer": "O'Fallon Wheach"
 },
 {
   "city": "Albuquerque",
   "state": " NM",
   "brewery": "Marble Brewery",
   "beer": "Marble Pilsner"
 },
 {
   "city": "Albuquerque",
   "state": " NM",
   "brewery": "Marble Brewery",
   "beer": "Marble India Pale Ale"
 },
 {
   "city": "Vadnais Heights",
   "state": " MN",
   "brewery": "Big Wood Brewery",
   "beer": "Jack Pine Savage"
 },
 {
   "city": "Vadnais Heights",
   "state": " MN",
   "brewery": "Big Wood Brewery",
   "beer": "Forest Fire Imperial Smoked Rye"
 },
 {
   "city": "Vadnais Heights",
   "state": " MN",
   "brewery": "Big Wood Brewery",
   "beer": "Bad Axe Imperial IPA"
 },
 {
   "city": "Vadnais Heights",
   "state": " MN",
   "brewery": "Big Wood Brewery",
   "beer": "Morning Wood"
 },
 {
   "city": "Vadnais Heights",
   "state": " MN",
   "brewery": "Big Wood Brewery",
   "beer": "Bark Bite IPA"
 },
 {
   "city": "Lenoir",
   "state": " NC",
   "brewery": "Howard Brewing Company",
   "beer": "Trail Maker Pale Ale"
 },
 {
   "city": "Lenoir",
   "state": " NC",
   "brewery": "Howard Brewing Company",
   "beer": "Action Man Lager"
 },
 {
   "city": "Leominster",
   "state": " MA",
   "brewery": "Downeast Cider House",
   "beer": "Cranberry Blend"
 },
 {
   "city": "Leominster",
   "state": " MA",
   "brewery": "Downeast Cider House",
   "beer": "Orignal Blend"
 },
 {
   "city": "Gainesville",
   "state": " FL",
   "brewery": "Swamp Head Brewery",
   "beer": "Big Nose"
 },
 {
   "city": "Gainesville",
   "state": " FL",
   "brewery": "Swamp Head Brewery",
   "beer": "Cotton Mouth"
 },
 {
   "city": "Gainesville",
   "state": " FL",
   "brewery": "Swamp Head Brewery",
   "beer": "Stump Knocker Pale Ale"
 },
 {
   "city": "Gainesville",
   "state": " FL",
   "brewery": "Swamp Head Brewery",
   "beer": "Midnight Oil"
 },
 {
   "city": "Gainesville",
   "state": " FL",
   "brewery": "Swamp Head Brewery",
   "beer": "Wild Night"
 },
 {
   "city": "Half Moon Bay",
   "state": " CA",
   "brewery": "Mavericks Beer Company",
   "beer": "Pit Stop Chocolate Porter"
 },
 {
   "city": "Half Moon Bay",
   "state": " CA",
   "brewery": "Mavericks Beer Company",
   "beer": "Pace Setter Belgian Style Wit"
 },
 {
   "city": "Half Moon Bay",
   "state": " CA",
   "brewery": "Mavericks Beer Company",
   "beer": "Back in the Saddle Rye Pale Ale"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "TailGate Beer",
   "beer": "Dodgy Knight Imperial IPA"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "TailGate Beer",
   "beer": "TailGate Saison"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "TailGate Beer",
   "beer": "TailGate IPA"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "TailGate Beer",
   "beer": "TailGate IPA"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "TailGate Beer",
   "beer": "TailGate Hefeweizen"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "TailGate Beer",
   "beer": "Blacktop Blonde"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "TailGate Beer",
   "beer": "Blacktop Blonde"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "TailGate Beer",
   "beer": "TailGate Hefeweizen"
 },
 {
   "city": "Pacific",
   "state": " WA",
   "brewery": "Northwest Brewing Company",
   "beer": "Hoppy Bitch IPA"
 },
 {
   "city": "Pacific",
   "state": " WA",
   "brewery": "Northwest Brewing Company",
   "beer": "Three Skulls Ale Pale Ale"
 },
 {
   "city": "Aurora",
   "state": " CO",
   "brewery": "Dad & Dude's Breweria",
   "beer": "Dank IPA"
 },
 {
   "city": "Aurora",
   "state": " CO",
   "brewery": "Dad & Dude's Breweria",
   "beer": "Dank IPA (2012)"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Centennial Beer Company",
   "beer": "All American Blonde Ale"
 },
 {
   "city": "Edwards",
   "state": " CO",
   "brewery": "Centennial Beer Company",
   "beer": "All American Red Ale"
 },
 {
   "city": "Talkeetna",
   "state": " AK",
   "brewery": "Denali Brewing Company",
   "beer": "Chuli Stout"
 },
 {
   "city": "Talkeetna",
   "state": " AK",
   "brewery": "Denali Brewing Company",
   "beer": "Mother Ale"
 },
 {
   "city": "Talkeetna",
   "state": " AK",
   "brewery": "Denali Brewing Company",
   "beer": "Twister Creek India Pale Ale"
 },
 {
   "city": "Talkeetna",
   "state": " AK",
   "brewery": "Denali Brewing Company",
   "beer": "Single Engine Red"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "Deschutes Brewery",
   "beer": "Mirror Pond Pale Ale"
 },
 {
   "city": "Hardy",
   "state": " VA",
   "brewery": "Sunken City Brewing Company",
   "beer": "Dam Lager"
 },
 {
   "city": "Hardy",
   "state": " VA",
   "brewery": "Sunken City Brewing Company",
   "beer": "Red Clay IPA"
 },
 {
   "city": "Menominie",
   "state": " WI",
   "brewery": "Lucette Brewing Company",
   "beer": "Hips Don't Lie"
 },
 {
   "city": "Menominie",
   "state": " WI",
   "brewery": "Lucette Brewing Company",
   "beer": "Ride Again Pale Ale"
 },
 {
   "city": "Menominie",
   "state": " WI",
   "brewery": "Lucette Brewing Company",
   "beer": "The Farmer's Daughter"
 },
 {
   "city": "Sheridan",
   "state": " WY",
   "brewery": "The Black Tooth Brewing Company",
   "beer": "Bomber Mountain Amber Ale (2013)"
 },
 {
   "city": "Sheridan",
   "state": " WY",
   "brewery": "The Black Tooth Brewing Company",
   "beer": "Indian Paintbrush IPA"
 },
 {
   "city": "Sheridan",
   "state": " WY",
   "brewery": "The Black Tooth Brewing Company",
   "beer": "Saddle Bronc Brown Ale (2013)"
 },
 {
   "city": "Sheridan",
   "state": " WY",
   "brewery": "The Black Tooth Brewing Company",
   "beer": "Wagon Box Wheat Beer"
 },
 {
   "city": "Soldotna",
   "state": " AK",
   "brewery": "Kenai River Brewing Company",
   "beer": "Skilak Scottish Ale"
 },
 {
   "city": "Soldotna",
   "state": " AK",
   "brewery": "Kenai River Brewing Company",
   "beer": "Peninsula Brewers Reserve (PBR)"
 },
 {
   "city": "Soldotna",
   "state": " AK",
   "brewery": "Kenai River Brewing Company",
   "beer": "Sunken Island IPA"
 },
 {
   "city": "Soldotna",
   "state": " AK",
   "brewery": "Kenai River Brewing Company",
   "beer": "Skilak Scottish Ale (2011)"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "River North Brewery",
   "beer": "River North White Ale"
 },
 {
   "city": "Denver",
   "state": " CO",
   "brewery": "River North Brewery",
   "beer": "River North Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Fremont Brewing Company",
   "beer": "77 Fremont Select Spring Session IPA"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Fremont Brewing Company",
   "beer": "Fremont Organic Pale Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Fremont Brewing Company",
   "beer": "Abominable Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Fremont Brewing Company",
   "beer": "Harvest Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Fremont Brewing Company",
   "beer": "Fremont Summer Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Fremont Brewing Company",
   "beer": "Universale Pale Ale"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Fremont Brewing Company",
   "beer": "Interurban IPA"
 },
 {
   "city": "South San Francisco",
   "state": " CA",
   "brewery": "Armstrong Brewing Company",
   "beer": "Mo's Gose"
 },
 {
   "city": "Golden",
   "state": " CO",
   "brewery": "AC Golden Brewing Company",
   "beer": "Colorado Native"
 },
 {
   "city": "Golden",
   "state": " CO",
   "brewery": "AC Golden Brewing Company",
   "beer": "Colorado Native (2011)"
 },
 {
   "city": "Alpine",
   "state": " TX",
   "brewery": "Big Bend Brewing Company",
   "beer": "La Frontera Premium IPA"
 },
 {
   "city": "Alpine",
   "state": " TX",
   "brewery": "Big Bend Brewing Company",
   "beer": "Tejas Lager"
 },
 {
   "city": "Alpine",
   "state": " TX",
   "brewery": "Big Bend Brewing Company",
   "beer": "Number 22 Porter"
 },
 {
   "city": "Alpine",
   "state": " TX",
   "brewery": "Big Bend Brewing Company",
   "beer": "Big Bend Hefeweizen"
 },
 {
   "city": "Alpine",
   "state": " TX",
   "brewery": "Big Bend Brewing Company",
   "beer": "Terlingua Gold"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "Good Life Brewing Company",
   "beer": "Descender IPA"
 },
 {
   "city": "Bend",
   "state": " OR",
   "brewery": "Good Life Brewing Company",
   "beer": "Sweet As Pacific Ale"
 },
 {
   "city": "Jacksonville Beach",
   "state": " FL",
   "brewery": "Engine 15 Brewing",
   "beer": "Nut Sack Imperial Brown Ale"
 },
 {
   "city": "Jacksonville",
   "state": " FL",
   "brewery": "Green Room Brewing",
   "beer": "Pablo Beach Pale Ale"
 },
 {
   "city": "Tampa Bay",
   "state": " FL",
   "brewery": "Brindle Dog Brewing Company",
   "beer": "Tampa Pale Ale"
 },
 {
   "city": "Tampa Bay",
   "state": " FL",
   "brewery": "Brindle Dog Brewing Company",
   "beer": "Orange Grove Wheat Ale"
 },
 {
   "city": "Knoxville",
   "state": " IA",
   "brewery": "Peace Tree Brewing Company",
   "beer": "Side Kick Kölsch"
 },
 {
   "city": "Athens",
   "state": " GA",
   "brewery": "Terrapin Brewing Company",
   "beer": "RecreationAle"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Pete's Brewing Company",
   "beer": "Pete's ESP Lager (1998)"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Pete's Brewing Company",
   "beer": "Pete's Wicked Summer Brew (1995)"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Pete's Brewing Company",
   "beer": "Pete's Wicked Bohemian Pilsner (1997)"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Pete's Brewing Company",
   "beer": "Pete's Wicked Pale Ale (1997)"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Pete's Brewing Company",
   "beer": "Pete's Wicked Summer Brew (2002)"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Pete's Brewing Company",
   "beer": "Pete's Wicked Summer Brew (1997)"
 },
 {
   "city": "San Antonio",
   "state": " TX",
   "brewery": "Pete's Brewing Company",
   "beer": "Pete's Wicked Summer Brew (1996)"
 },
 {
   "city": "Spirit Lake",
   "state": " IA",
   "brewery": "Okoboji Brewing Company",
   "beer": "The Hole in Hadrian's Wall"
 },
 {
   "city": "Spirit Lake",
   "state": " IA",
   "brewery": "Okoboji Brewing Company",
   "beer": "33 Select Brown Ale"
 },
 {
   "city": "Spirit Lake",
   "state": " IA",
   "brewery": "Okoboji Brewing Company",
   "beer": "Midwest Charm Farmhouse Ale"
 },
 {
   "city": "Spirit Lake",
   "state": " IA",
   "brewery": "Okoboji Brewing Company",
   "beer": "Boji Blue Pale Ale"
 },
 {
   "city": "Spirit Lake",
   "state": " IA",
   "brewery": "Okoboji Brewing Company",
   "beer": "Winter Games Select #32 Stout"
 },
 {
   "city": "Spirit Lake",
   "state": " IA",
   "brewery": "Okoboji Brewing Company",
   "beer": "Boji Beach Golden Rye Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Crystal Springs Brewing Company",
   "beer": "South Ridge Amber Ale"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Crystal Springs Brewing Company",
   "beer": "Summertime Ale"
 },
 {
   "city": "Tacoma",
   "state": " WA",
   "brewery": "Engine House 9",
   "beer": "Underachiever"
 },
 {
   "city": "Minnetonka",
   "state": " MN",
   "brewery": "Tonka Beer Company",
   "beer": "Big Island Shandy"
 },
 {
   "city": "Minnetonka",
   "state": " MN",
   "brewery": "Tonka Beer Company",
   "beer": "Preservation IPA"
 },
 {
   "city": "Marietta",
   "state": " GA",
   "brewery": "Red Hare Brewing Company",
   "beer": "Watership Brown Ale"
 },
 {
   "city": "Marietta",
   "state": " GA",
   "brewery": "Red Hare Brewing Company",
   "beer": "Gangway IPA"
 },
 {
   "city": "Marietta",
   "state": " GA",
   "brewery": "Red Hare Brewing Company",
   "beer": "Long Day Lager"
 },
 {
   "city": "Redlands",
   "state": " CA",
   "brewery": "Hangar 24 Craft Brewery",
   "beer": "Orange Wheat"
 },
 {
   "city": "Redlands",
   "state": " CA",
   "brewery": "Hangar 24 Craft Brewery",
   "beer": "Hangar 24 Helles Lager"
 },
 {
   "city": "Sheffield",
   "state": " MA",
   "brewery": "Big Elm Brewing",
   "beer": "Big Elm IPA"
 },
 {
   "city": "Sheffield",
   "state": " MA",
   "brewery": "Big Elm Brewing",
   "beer": "Gerry Dog Stout"
 },
 {
   "city": "Sheffield",
   "state": " MA",
   "brewery": "Big Elm Brewing",
   "beer": "413 Farmhouse Ale"
 },
 {
   "city": "Birmingham",
   "state": " AL",
   "brewery": "Good People Brewing Company",
   "beer": "Good People Pale Ale"
 },
 {
   "city": "Birmingham",
   "state": " AL",
   "brewery": "Good People Brewing Company",
   "beer": "Snake Handler Double IPA"
 },
 {
   "city": "Birmingham",
   "state": " AL",
   "brewery": "Good People Brewing Company",
   "beer": "Coffee Oatmeal Stout"
 },
 {
   "city": "Birmingham",
   "state": " AL",
   "brewery": "Good People Brewing Company",
   "beer": "Good People IPA"
 },
 {
   "city": "Birmingham",
   "state": " AL",
   "brewery": "Good People Brewing Company",
   "beer": "Good People American Brown Ale"
 },
 {
   "city": "Halethorpe",
   "state": " MD",
   "brewery": "Heavy Seas Beer",
   "beer": "Loose Cannon"
 },
 {
   "city": "Halethorpe",
   "state": " MD",
   "brewery": "Heavy Seas Beer",
   "beer": "AARGHtoberfest!"
 },
 {
   "city": "Halethorpe",
   "state": " MD",
   "brewery": "Heavy Seas Beer",
   "beer": "Davy Jones Lager"
 },
 {
   "city": "Telluride",
   "state": " CO",
   "brewery": "Telluride Brewing Company",
   "beer": "Face Down Brown Ale"
 },
 {
   "city": "Telluride",
   "state": " CO",
   "brewery": "Telluride Brewing Company",
   "beer": "Tempter IPA"
 },
 {
   "city": "Telluride",
   "state": " CO",
   "brewery": "Telluride Brewing Company",
   "beer": "Bridal Veil Rye Pale Ale"
 },
 {
   "city": "Gig Harbor",
   "state": " WA",
   "brewery": "7 Seas Brewing Company",
   "beer": "Rude Parrot IPA"
 },
 {
   "city": "Gig Harbor",
   "state": " WA",
   "brewery": "7 Seas Brewing Company",
   "beer": "British Pale Ale (2010)"
 },
 {
   "city": "Gig Harbor",
   "state": " WA",
   "brewery": "7 Seas Brewing Company",
   "beer": "British Pale Ale"
 },
 {
   "city": "Gig Harbor",
   "state": " WA",
   "brewery": "7 Seas Brewing Company",
   "beer": "Ballz Deep Double IPA"
 },
 {
   "city": "Des Moines",
   "state": " IA",
   "brewery": "Confluence Brewing Company",
   "beer": "Des Moines IPA"
 },
 {
   "city": "Des Moines",
   "state": " IA",
   "brewery": "Confluence Brewing Company",
   "beer": "Capital Gold Golden Lager"
 },
 {
   "city": "Des Moines",
   "state": " IA",
   "brewery": "Confluence Brewing Company",
   "beer": "Farmer John's Multi-Grain Ale"
 },
 {
   "city": "Yakima",
   "state": " WA",
   "brewery": "Bale Breaker Brewing Company",
   "beer": "Topcutter India Pale Ale"
 },
 {
   "city": "Yakima",
   "state": " WA",
   "brewery": "Bale Breaker Brewing Company",
   "beer": "Field 41 Pale Ale"
 },
 {
   "city": "New York",
   "state": " NY",
   "brewery": "The Manhattan Brewing Company",
   "beer": "Manhattan Gold Lager (1990)"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "MacTarnahans Brewing Company",
   "beer": "Mac's Highlander Pale Ale (2000)"
 },
 {
   "city": "Portland",
   "state": " OR",
   "brewery": "MacTarnahans Brewing Company",
   "beer": "Mac's Scottish Style Amber Ale (2000)"
 },
 {
   "city": "Green Bay",
   "state": " WI",
   "brewery": "Stillmank Beer Company",
   "beer": "Wisco Disco"
 },
 {
   "city": "Woodinville",
   "state": " WA",
   "brewery": "Redhook Brewery",
   "beer": "Long Hammer IPA"
 },
 {
   "city": "Woodinville",
   "state": " WA",
   "brewery": "Redhook Brewery",
   "beer": "Long Hammer IPA"
 },
 {
   "city": "Woodinville",
   "state": " WA",
   "brewery": "Redhook Brewery",
   "beer": "Copper Hook (2011)"
 },
 {
   "city": "Philadelphia",
   "state": " PA",
   "brewery": "Dock Street Brewery",
   "beer": "Dock Street Amber Beer (1992)"
 },
 {
   "city": "Patchogue",
   "state": " NY",
   "brewery": "Blue Point Brewing Company",
   "beer": "Toxic Sludge"
 },
 {
   "city": "Patchogue",
   "state": " NY",
   "brewery": "Blue Point Brewing Company",
   "beer": "Blue Point White IPA"
 },
 {
   "city": "Patchogue",
   "state": " NY",
   "brewery": "Blue Point Brewing Company",
   "beer": "Blue Point Summer Ale"
 },
 {
   "city": "Patchogue",
   "state": " NY",
   "brewery": "Blue Point Brewing Company",
   "beer": "Toasted Lager"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Tampa Bay Brewing Company",
   "beer": "Loafin Bräu"
 },
 {
   "city": "Tampa",
   "state": " FL",
   "brewery": "Tampa Bay Brewing Company",
   "beer": "Old Elephant Foot IPA"
 },
 {
   "city": "Belmont",
   "state": " CA",
   "brewery": "Devil's Canyon Brewery",
   "beer": "Deadicated Amber"
 },
 {
   "city": "Belmont",
   "state": " CA",
   "brewery": "Devil's Canyon Brewery",
   "beer": "Kaleidoscope Collaboration 2012"
 },
 {
   "city": "Belmont",
   "state": " CA",
   "brewery": "Devil's Canyon Brewery",
   "beer": "California Sunshine Rye IPA"
 },
 {
   "city": "Belmont",
   "state": " CA",
   "brewery": "Devil's Canyon Brewery",
   "beer": "Full Boar Scotch Ale"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "Stone Coast Brewing Company",
   "beer": "Sunsplash Golden Ale (2004)"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "Broken Tooth Brewing Company",
   "beer": "Northern Lights Amber Ale"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "Broken Tooth Brewing Company",
   "beer": "Polar Pale Ale"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "Broken Tooth Brewing Company",
   "beer": "Chugach Session Ale"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "Broken Tooth Brewing Company",
   "beer": "Fairweather IPA"
 },
 {
   "city": "Silverton",
   "state": " OR",
   "brewery": "Seven Brides Brewery",
   "beer": "Frankenlou's IPA"
 },
 {
   "city": "Silverton",
   "state": " OR",
   "brewery": "Seven Brides Brewery",
   "beer": "Becky's Black Cat Porter"
 },
 {
   "city": "Newburyport",
   "state": " MA",
   "brewery": "Newburyport Brewing Company",
   "beer": "Green Head IPA"
 },
 {
   "city": "Newburyport",
   "state": " MA",
   "brewery": "Newburyport Brewing Company",
   "beer": "Plum Island Belgian White"
 },
 {
   "city": "Newburyport",
   "state": " MA",
   "brewery": "Newburyport Brewing Company",
   "beer": "Newburyport Pale Ale"
 },
 {
   "city": "Aurora",
   "state": " CO",
   "brewery": "Dry Dock Brewing Company",
   "beer": "Hop Abomination"
 },
 {
   "city": "Aurora",
   "state": " CO",
   "brewery": "Dry Dock Brewing Company",
   "beer": "Apricot Blonde"
 },
 {
   "city": "Aurora",
   "state": " CO",
   "brewery": "Dry Dock Brewing Company",
   "beer": "Dry Dock Hefeweizen"
 },
 {
   "city": "Aurora",
   "state": " CO",
   "brewery": "Dry Dock Brewing Company",
   "beer": "Dry Dock Amber Ale"
 },
 {
   "city": "Charlotte",
   "state": " NC",
   "brewery": "Cans Bar and Canteen",
   "beer": "THP White (2006)"
 },
 {
   "city": "Charlotte",
   "state": " NC",
   "brewery": "Cans Bar and Canteen",
   "beer": "THP Amber (2006)"
 },
 {
   "city": "Charlotte",
   "state": " NC",
   "brewery": "Cans Bar and Canteen",
   "beer": "THP Light (2006)"
 },
 {
   "city": "Charlotte",
   "state": " NC",
   "brewery": "Cans Bar and Canteen",
   "beer": "THP Dark (2006)"
 },
 {
   "city": "Glendale",
   "state": " WI",
   "brewery": "Sprecher Brewing Company",
   "beer": "Special Amber"
 },
 {
   "city": "Glendale",
   "state": " WI",
   "brewery": "Sprecher Brewing Company",
   "beer": "Special Amber"
 },
 {
   "city": "Stevensville",
   "state": " MT",
   "brewery": "Wildwood Brewing Company",
   "beer": "Mystical Stout"
 },
 {
   "city": "Stevensville",
   "state": " MT",
   "brewery": "Wildwood Brewing Company",
   "beer": "Bodacious Bock"
 },
 {
   "city": "Stevensville",
   "state": " MT",
   "brewery": "Wildwood Brewing Company",
   "beer": "Ambitious Lager"
 },
 {
   "city": "Leavenworth",
   "state": " KS",
   "brewery": "High Noon Saloon And Brewery",
   "beer": "Tonganoxie Honey Wheat"
 },
 {
   "city": "Leavenworth",
   "state": " KS",
   "brewery": "High Noon Saloon And Brewery",
   "beer": "Oregon Trail Unfiltered Raspberry Wheat"
 },
 {
   "city": "Leavenworth",
   "state": " KS",
   "brewery": "High Noon Saloon And Brewery",
   "beer": "Annie's Amber Ale"
 },
 {
   "city": "Middlebury",
   "state": " VT",
   "brewery": "Woodchuck Hard Cider",
   "beer": "Woodchuck Amber Hard Cider"
 },
 {
   "city": "Portland",
   "state": " ME",
   "brewery": "Sea Dog Brewing Company",
   "beer": "Sea Dog Wild Blueberry Wheat Ale"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Gordon (2005)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Ten Fidy Imperial Stout (2008)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Ten Fidy Imperial Stout (2007)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Old Chub (2008)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Old Chub (2004)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Old Chub (2003)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale (2008)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale (2006)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale (2004)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale (2003)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Dale's Pale Ale (2002)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Leroy (2005)"
 },
 {
   "city": "Lyons",
   "state": " CO",
   "brewery": "Oskar Blues Brewery",
   "beer": "Gordon Beer (2006)"
 },
 {
   "city": "Mooresville",
   "state": " NC",
   "brewery": "Carolina Beer & Beverage",
   "beer": "Carolina Lighthouse (2007)"
 },
 {
   "city": "Mooresville",
   "state": " NC",
   "brewery": "Carolina Beer & Beverage",
   "beer": "Carolina Blonde (2006)"
 },
 {
   "city": "Mooresville",
   "state": " NC",
   "brewery": "Carolina Beer & Beverage",
   "beer": "Carolina Blonde Light (2005)"
 },
 {
   "city": "Krebs",
   "state": " OK",
   "brewery": "Krebs Brewing Company (Pete's Pl...",
   "beer": "Choc Beer (2003)"
 },
 {
   "city": "Fort Wayne",
   "state": " IN",
   "brewery": "Warbird Brewing Company",
   "beer": "T-6 Red Ale (2004)"
 },
 {
   "city": "Lake Havasu City",
   "state": " AZ",
   "brewery": "Mudshark Brewing Company",
   "beer": "Full Moon Belgian White Ale"
 },
 {
   "city": "Lake Havasu City",
   "state": " AZ",
   "brewery": "Mudshark Brewing Company",
   "beer": "Desert Magic IPA"
 },
 {
   "city": "Lake Havasu City",
   "state": " AZ",
   "brewery": "Mudshark Brewing Company",
   "beer": "Up River Light"
 },
 {
   "city": "Lake Havasu City",
   "state": " AZ",
   "brewery": "Mudshark Brewing Company",
   "beer": "Full Moon Belgian White Ale (2007)"
 },
 {
   "city": "Lake Havasu City",
   "state": " AZ",
   "brewery": "Mudshark Brewing Company",
   "beer": "Dry Heat Hefeweizen (2006)"
 },
 {
   "city": "Cortland",
   "state": " NE",
   "brewery": "Spilker Ales",
   "beer": "Hopluia (2004)"
 },
 {
   "city": "Tacoma",
   "state": " WA",
   "brewery": "Wingman Brewers",
   "beer": "Ace IPA"
 },
 {
   "city": "Tacoma",
   "state": " WA",
   "brewery": "Wingman Brewers",
   "beer": "P-51 Porter"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Kettle House Brewing Company",
   "beer": "Cold Smoke Scotch Ale (2007)"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Kettle House Brewing Company",
   "beer": "Double Haul IPA (2009)"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Kettle House Brewing Company",
   "beer": "Double Haul IPA (2006)"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Kettle House Brewing Company",
   "beer": "Eddy Out Pale Ale"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Kettle House Brewing Company",
   "beer": "Double Haul IPA"
 },
 {
   "city": "Missoula",
   "state": " MT",
   "brewery": "Kettle House Brewing Company",
   "beer": "Cold Smoke Scotch Ale"
 },
 {
   "city": "Marlborough",
   "state": " MA",
   "brewery": "Sherwood Forest Brewers",
   "beer": "Archer's Ale (2004)"
 },
 {
   "city": "Pawcatuck",
   "state": " CT",
   "brewery": "Cottrell Brewing",
   "beer": "Chester's Beer (2005)"
 },
 {
   "city": "Colorado Springs",
   "state": " CO",
   "brewery": "Arctic Craft Brewery",
   "beer": "On-On Ale (2008)"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Monkey Paw Pub & Brewery",
   "beer": "Sweet Georgia Brown"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Monkey Paw Pub & Brewery",
   "beer": "Rich Man's IIPA"
 },
 {
   "city": "San Diego",
   "state": " CA",
   "brewery": "Monkey Paw Pub & Brewery",
   "beer": "Monkey Paw Oatmeal Pale Ale"
 },
 {
   "city": "Greeley",
   "state": " CO",
   "brewery": "Crabtree Brewing Company",
   "beer": "Trigger Blonde Ale"
 },
 {
   "city": "Greeley",
   "state": " CO",
   "brewery": "Crabtree Brewing Company",
   "beer": "Crabtree Oatmeal Stout"
 },
 {
   "city": "Greeley",
   "state": " CO",
   "brewery": "Crabtree Brewing Company",
   "beer": "Eclipse Black IPA"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Emerald City Beer Company",
   "beer": "Dottie Seattle Lager"
 },
 {
   "city": "Carlsbad",
   "state": " CA",
   "brewery": "Butcher's Brewing",
   "beer": "Mucho Aloha Hawaiian Pale Ale"
 },
 {
   "city": "Myrtle Beach",
   "state": " SC",
   "brewery": "New South Brewing Company",
   "beer": "Nut Brown Ale"
 },
 {
   "city": "Myrtle Beach",
   "state": " SC",
   "brewery": "New South Brewing Company",
   "beer": "White Ale"
 },
 {
   "city": "Chattanooga",
   "state": " TN",
   "brewery": "Big River Brewing Company",
   "beer": "Big River Pilsner"
 },
 {
   "city": "Chattanooga",
   "state": " TN",
   "brewery": "Big River Brewing Company",
   "beer": "House Brand IPA"
 },
 {
   "city": "Boulder",
   "state": " CO",
   "brewery": "Twisted Pine Brewing Company",
   "beer": "Hoppy Boy"
 },
 {
   "city": "Frederick",
   "state": " MD",
   "brewery": "Flying Dog Brewery",
   "beer": "Snake Dog IPA"
 },
 {
   "city": "Frederick",
   "state": " MD",
   "brewery": "Flying Dog Brewery",
   "beer": "Underdog Atlantic Lager"
 },
 {
   "city": "Santa Cruz",
   "state": " CA",
   "brewery": "Uncommon Brewers",
   "beer": "Scotty K NA"
 },
 {
   "city": "Santa Cruz",
   "state": " CA",
   "brewery": "Uncommon Brewers",
   "beer": "Bacon Brown Ale"
 },
 {
   "city": "Santa Cruz",
   "state": " CA",
   "brewery": "Uncommon Brewers",
   "beer": "Golden State Ale"
 },
 {
   "city": "Santa Cruz",
   "state": " CA",
   "brewery": "Uncommon Brewers",
   "beer": "Baltic Porter"
 },
 {
   "city": "Santa Cruz",
   "state": " CA",
   "brewery": "Uncommon Brewers",
   "beer": "Siamese twin"
 },
 {
   "city": "Aspen",
   "state": " CO",
   "brewery": "Aspen Brewing Company",
   "beer": "This Season's Blonde"
 },
 {
   "city": "Aspen",
   "state": " CO",
   "brewery": "Aspen Brewing Company",
   "beer": "Independence Pass Ale"
 },
 {
   "city": "Durham",
   "state": " NC",
   "brewery": "Triangle Brewing Company",
   "beer": "Triangle India Pale Ale"
 },
 {
   "city": "Durham",
   "state": " NC",
   "brewery": "Triangle Brewing Company",
   "beer": "Triangle White Ale"
 },
 {
   "city": "Durham",
   "state": " NC",
   "brewery": "Triangle Brewing Company",
   "beer": "Triangle Belgian Golden Ale"
 },
 {
   "city": "New York",
   "state": " NY",
   "brewery": "Bomb Beer Company",
   "beer": "Bomb Lager (New Recipe)"
 },
 {
   "city": "New York",
   "state": " NY",
   "brewery": "Bomb Beer Company",
   "beer": "Bomb Lager (Old Recipe)"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Churchkey Can Company",
   "beer": "Churchkey Pilsner Style Beer"
 },
 {
   "city": "Jacksonville",
   "state": " FL",
   "brewery": "Intuition Ale Works",
   "beer": "Jon Boat Coastal Ale"
 },
 {
   "city": "Jacksonville",
   "state": " FL",
   "brewery": "Intuition Ale Works",
   "beer": "I-10 IPA"
 },
 {
   "city": "Jacksonville",
   "state": " FL",
   "brewery": "Intuition Ale Works",
   "beer": "People's Pale Ale"
 },
 {
   "city": "Asheville",
   "state": " NC",
   "brewery": "Asheville Brewing Company",
   "beer": "Rocket Girl"
 },
 {
   "city": "Asheville",
   "state": " NC",
   "brewery": "Asheville Brewing Company",
   "beer": "Ninja Porter"
 },
 {
   "city": "Asheville",
   "state": " NC",
   "brewery": "Asheville Brewing Company",
   "beer": "Shiva IPA"
 },
 {
   "city": "Eau Claire",
   "state": " WI",
   "brewery": "Northwoods Brewpub",
   "beer": "Walter's Premium Pilsener Beer"
 },
 {
   "city": "Eau Claire",
   "state": " WI",
   "brewery": "Northwoods Brewpub",
   "beer": "Floppin' Crappie"
 },
 {
   "city": "Reno",
   "state": " NV",
   "brewery": "Buckbean Brewing Company",
   "beer": "Tour de Nez Belgian IPA (Current)"
 },
 {
   "city": "Reno",
   "state": " NV",
   "brewery": "Buckbean Brewing Company",
   "beer": "Roler Bock (Current)"
 },
 {
   "city": "Reno",
   "state": " NV",
   "brewery": "Buckbean Brewing Company",
   "beer": "Black Adder IBA (Current)"
 },
 {
   "city": "Reno",
   "state": " NV",
   "brewery": "Buckbean Brewing Company",
   "beer": "Very Noddy Lager (Current)"
 },
 {
   "city": "Reno",
   "state": " NV",
   "brewery": "Buckbean Brewing Company",
   "beer": "Tule Duck Red Ale (Current)"
 },
 {
   "city": "Reno",
   "state": " NV",
   "brewery": "Buckbean Brewing Company",
   "beer": "Original Orange Blossom Ale (Current)"
 },
 {
   "city": "Reno",
   "state": " NV",
   "brewery": "Buckbean Brewing Company",
   "beer": "Black Noddy Lager (Current)"
 },
 {
   "city": "Dolores",
   "state": " CO",
   "brewery": "Dolores River Brewery",
   "beer": "Dolores River Hefeweizen"
 },
 {
   "city": "Dolores",
   "state": " CO",
   "brewery": "Dolores River Brewery",
   "beer": "Dolores River ESB"
 },
 {
   "city": "Dolores",
   "state": " CO",
   "brewery": "Dolores River Brewery",
   "beer": "Snaggletooth Double Pale Ale"
 },
 {
   "city": "Dolores",
   "state": " CO",
   "brewery": "Dolores River Brewery",
   "beer": "Dolores River Pale Ale"
 },
 {
   "city": "Dolores",
   "state": " CO",
   "brewery": "Dolores River Brewery",
   "beer": "Dolores River Dry Stout"
 },
 {
   "city": "Dolores",
   "state": " CO",
   "brewery": "Dolores River Brewery",
   "beer": "Dolores River Mild"
 },
 {
   "city": "Smithton",
   "state": " PA",
   "brewery": "Flat Rock Brewing Company",
   "beer": "Inclined Plane Ale"
 },
 {
   "city": "Abita Springs",
   "state": " LA",
   "brewery": "Abita Brewing Company",
   "beer": "Jockamo IPA"
 },
 {
   "city": "Abita Springs",
   "state": " LA",
   "brewery": "Abita Brewing Company",
   "beer": "Purple Haze"
 },
 {
   "city": "Abita Springs",
   "state": " LA",
   "brewery": "Abita Brewing Company",
   "beer": "Abita Amber"
 },
 {
   "city": "Mammoth Lakes",
   "state": " CA",
   "brewery": "Mammoth Brewing Company",
   "beer": "High Country Pilsner (Current)"
 },
 {
   "city": "Mammoth Lakes",
   "state": " CA",
   "brewery": "Mammoth Brewing Company",
   "beer": "Epic IPA"
 },
 {
   "city": "Mammoth Lakes",
   "state": " CA",
   "brewery": "Mammoth Brewing Company",
   "beer": "Golden Trout Pilsner"
 },
 {
   "city": "Mammoth Lakes",
   "state": " CA",
   "brewery": "Mammoth Brewing Company",
   "beer": "Real McCoy Amber Ale (Current)"
 },
 {
   "city": "Belt",
   "state": " MT",
   "brewery": "Harvest Moon Brewing Company",
   "beer": "Great Falls Select Pale Ale"
 },
 {
   "city": "Belt",
   "state": " MT",
   "brewery": "Harvest Moon Brewing Company",
   "beer": "Beltian White"
 },
 {
   "city": "Williams",
   "state": " AZ",
   "brewery": "Grand Canyon Brewing Company",
   "beer": "White Water Wheat"
 },
 {
   "city": "Williams",
   "state": " AZ",
   "brewery": "Grand Canyon Brewing Company",
   "beer": "Grand Canyon American Pilsner"
 },
 {
   "city": "Williams",
   "state": " AZ",
   "brewery": "Grand Canyon Brewing Company",
   "beer": "Grand Canyon Sunset Amber Ale"
 },
 {
   "city": "Williams",
   "state": " AZ",
   "brewery": "Grand Canyon Brewing Company",
   "beer": "Black Iron India Pale Ale"
 },
 {
   "city": "Helena",
   "state": " MT",
   "brewery": "Lewis and Clark Brewing Company",
   "beer": "Yellowstone Golden Ale"
 },
 {
   "city": "Helena",
   "state": " MT",
   "brewery": "Lewis and Clark Brewing Company",
   "beer": "Tumbleweed IPA"
 },
 {
   "city": "Helena",
   "state": " MT",
   "brewery": "Lewis and Clark Brewing Company",
   "beer": "Lewis & Clark Amber Ale"
 },
 {
   "city": "Helena",
   "state": " MT",
   "brewery": "Lewis and Clark Brewing Company",
   "beer": "Miner's Gold Hefeweizen"
 },
 {
   "city": "Helena",
   "state": " MT",
   "brewery": "Lewis and Clark Brewing Company",
   "beer": "Back Country Scottish Ale"
 },
 {
   "city": "Rochester",
   "state": " NY",
   "brewery": "Dundee Brewing Company",
   "beer": "Dundee Summer Wheat Beer"
 },
 {
   "city": "Greenville",
   "state": " DE",
   "brewery": "Twin Lakes Brewing Company",
   "beer": "Greenville Pale Ale"
 },
 {
   "city": "Kinston",
   "state": " NC",
   "brewery": "Mother Earth Brewing Company",
   "beer": "Second Wind Pale Ale"
 },
 {
   "city": "Kinston",
   "state": " NC",
   "brewery": "Mother Earth Brewing Company",
   "beer": "Sunny Haze"
 },
 {
   "city": "Battle Creek",
   "state": " MI",
   "brewery": "Arcadia Brewing Company",
   "beer": "Sky High Rye"
 },
 {
   "city": "Battle Creek",
   "state": " MI",
   "brewery": "Arcadia Brewing Company",
   "beer": "Whitsun"
 },
 {
   "city": "Hayward",
   "state": " WI",
   "brewery": "Angry Minnow Brewing Company",
   "beer": "River Pig Pale Ale"
 },
 {
   "city": "Hayward",
   "state": " WI",
   "brewery": "Angry Minnow Brewing Company",
   "beer": "Oaky's Oatmeal Stout"
 },
 {
   "city": "Whitefish",
   "state": " MT",
   "brewery": "Great Northern Brewing Company",
   "beer": "Black Star Double Hopped Golden Lager (24 oz.)"
 },
 {
   "city": "Whitefish",
   "state": " MT",
   "brewery": "Great Northern Brewing Company",
   "beer": "Black Star Double Hopped Golden Lager (12 oz.)"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Pyramid Breweries",
   "beer": "Pyramid Hefeweizen (2011)"
 },
 {
   "city": "Seattle",
   "state": " WA",
   "brewery": "Pyramid Breweries",
   "beer": "Haywire Hefeweizen (2010)"
 },
 {
   "city": "Lancaster",
   "state": " PA",
   "brewery": "Lancaster Brewing Company",
   "beer": "Rumspringa Golden Bock"
 },
 {
   "city": "Lancaster",
   "state": " PA",
   "brewery": "Lancaster Brewing Company",
   "beer": "Lancaster German Style Kölsch"
 },
 {
   "city": "Elmira",
   "state": " NY",
   "brewery": "Upstate Brewing Company",
   "beer": "Common Sense Kentucky Common Ale"
 },
 {
   "city": "Elmira",
   "state": " NY",
   "brewery": "Upstate Brewing Company",
   "beer": "Upstate I.P.W."
 },
 {
   "city": "North Conway",
   "state": " NH",
   "brewery": "Moat Mountain Smoke House & Brew...",
   "beer": "Boneshaker Brown Ale"
 },
 {
   "city": "North Conway",
   "state": " NH",
   "brewery": "Moat Mountain Smoke House & Brew...",
   "beer": "Iron Mike Pale Ale"
 },
 {
   "city": "Prescott",
   "state": " AZ",
   "brewery": "Prescott Brewing Company",
   "beer": "Ponderosa IPA"
 },
 {
   "city": "Prescott",
   "state": " AZ",
   "brewery": "Prescott Brewing Company",
   "beer": "Liquid Amber Ale"
 },
 {
   "city": "Flagstaff",
   "state": " AZ",
   "brewery": "Mogollon Brewing Company",
   "beer": "Wapiti Amber Ale"
 },
 {
   "city": "Pinedale",
   "state": " WY",
   "brewery": "Wind River Brewing Company",
   "beer": "Wyoming Pale Ale"
 },
 {
   "city": "Pinedale",
   "state": " WY",
   "brewery": "Wind River Brewing Company",
   "beer": "Wind River Blonde Ale"
 },
 {
   "city": "Silverton",
   "state": " CO",
   "brewery": "Silverton Brewery",
   "beer": "Bear Ass Brown"
 },
 {
   "city": "Silverton",
   "state": " CO",
   "brewery": "Silverton Brewery",
   "beer": "Red Mountain Ale"
 },
 {
   "city": "Silverton",
   "state": " CO",
   "brewery": "Silverton Brewery",
   "beer": "Ice Pick Ale"
 },
 {
   "city": "Libertyville",
   "state": " IL",
   "brewery": "Mickey Finn's Brewery",
   "beer": "Mickey Finn's Amber Ale"
 },
 {
   "city": "Covington",
   "state": " LA",
   "brewery": "Covington Brewhouse",
   "beer": "Heiner Brau Kölsch"
 },
 {
   "city": "Wilson",
   "state": " WI",
   "brewery": "Dave's Brewfarm",
   "beer": "BrewFarm Select Golden Lager"
 },
 {
   "city": "Ukiah",
   "state": " CA",
   "brewery": "Ukiah Brewing Company",
   "beer": "Pilsner Ukiah"
 },
 {
   "city": "Garrattsville",
   "state": " NY",
   "brewery": "Butternuts Beer and Ale",
   "beer": "Heinnieweisse Weissebier"
 },
 {
   "city": "Garrattsville",
   "state": " NY",
   "brewery": "Butternuts Beer and Ale",
   "beer": "Snapperhead IPA"
 },
 {
   "city": "Garrattsville",
   "state": " NY",
   "brewery": "Butternuts Beer and Ale",
   "beer": "Moo Thunder Stout"
 },
 {
   "city": "Garrattsville",
   "state": " NY",
   "brewery": "Butternuts Beer and Ale",
   "beer": "Porkslap Pale Ale"
 },
 {
   "city": "Anchorage",
   "state": " AK",
   "brewery": "Sleeping Lady Brewing Company",
   "beer": "Urban Wilderness Pale Ale"
 }
]
    }
    	
