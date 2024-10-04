Hooks.on('init', () => {
    if (typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'crucible-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});