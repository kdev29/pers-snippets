declare var require: any;

require.config({
    baseUrl: './'
});

require(['bootstraper'], 
(bootstraper) => {
        bootstraper.run();
    }
);