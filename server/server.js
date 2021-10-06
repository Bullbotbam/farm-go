const express = require ('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path');

const {typeDefs, resolvers} = require ('./schemas');
// import auth functionality once logic for auth is implemented
const db = require('./config/connection');


