export default {

    welcome: {
        initialRoute: true,
        title: 'Main',
        component: require('./Main').default,
        selfToolbar:'NO'
    },
    avatars: {
        title: 'Avatars',
        component: require('./Main').default,
    },
}
