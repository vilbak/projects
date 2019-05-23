Promise.all([loadVideoAsync(), loadMetaAsync()]).then(([videos, meta]) => {
    DoSomething(videos, meta);
});