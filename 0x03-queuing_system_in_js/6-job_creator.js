import {createQueue} from 'kue';


const queue = createQueue({name: 'push_notification_code'});

const job = queue.create('push_notification_code',{
    phoneNumber: '07880106464',
    message: 'Account has been registered'
});

job
    .on('queue', () => console.log(`Notification job created: ${job.id}`))
    .on('complete', () => console.log(`Notification job completed`))
    .on('falling', () => console.log('Notification job failed'));

job.save();
