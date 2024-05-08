#!/usr/bin/env node
import { createClient, print } from 'redis';
import {promisify} from 'util';

const client = createClient()

client.on('error', err => console.log('Redis Client Error', err));



const setNewSchool = (schoolName, value) => {
  client.SET(schoolName, value, print);
};

const displaySchoolValue = async(schoolName) => {
    console.log(await promisify(client.GET).bind(client)(schoolName));
};

async function main(){
    await displaySchoolValue('Holberton');
    setNewSchool('HolbertonSanFrancisco', '100');
    await displaySchoolValue('HolbertonSanFrancisco');
}

client.on('connect', () => {
    console.log('Redis client connected to the server');
    main();
});
