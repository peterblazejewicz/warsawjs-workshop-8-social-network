
const eventHandlers = {
    'User.Registered': (db, event, commit) => {
        return Promise.all([
            db.ref(`/profiles/${commit.sequenceID}`).update({
                ID: commit.sequenceID,
                displayName: event.eventPayload.displayName,
                posts: []
            })]);
        },
    'User.MessagePosted': (db, event, commit) => {
        return db.ref(`/profiles/${commit.sequenceID}/messages/${event.eventPayload.message.ID}`)
            .update(event.eventPayload.message);
    }
};

module.exports = function() {
    this.requires('subscriber');
    this.requires('firebase');
    this.provides('firebaseBuilder', ({ subscriber, firebase}) => {
        subscriber.queue('firebaseBuilder').bind('*.*').listen(({event, commit}) => {
            const eventName = `${commit.aggregateType}.${event.eventType}`;
            if(eventHandlers[eventName]) {
                return eventHandlers[eventName](firebase, event, commit);
            }
        });
    });
}
