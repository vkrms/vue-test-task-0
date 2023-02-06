https://vue-test-task-tawny.vercel.app/

I decided to go with Vue.js though I have not touched it for two years (I've been working with Next.js lately), so it took longer for me to complete (around 5 hours). I had to google some basic Vue stuff I have forgotten since then. But all in all I think it was a right decision because Vue is what I'm looking forward to work with.


I went with routes approach for the wizard because the task specificaly refers to the states as "pages", but since a user is not supposed to access steps of a wizard via the URL bar, I had to introduce some redirection methods in the router.


For passing data between routes, I went with the most basic approach from the docs: no vuex, just a reactive object. It's not even used reactively becauses the data is only being passed one way.


I used `KeepAlive` to save entered values between routes, so that user could go back from the summary view and edit it easily. This approach backfired by introducing some side effect which took some time to debug: it would "freeze" the state of the summary view, so that edits won't be reflected there. So I had to explicitly name the Form View and use the include attribute on `KeepAlive`.


I guess all of that could have been avoided, if I went to use some slider library on a single route, but I'm only realizing it now.


Eslint was yelling at me about two-word naming convention, so I went for My{Whatever} formula for components. I wouldn't do that for a production project, but I believe it's ok for a small test task.


Since my views only import one component each, I could have gone with views only or components only, but I decided to use both to reflect that in a real-world app a view would import lots of components. Also it feels weird to import components in the router, though obviously they are the same thing.


Unfortunately I have a limited experience in testing I had to skip that part. Also I have no experince with Tailwind, so I just went and wrote some good-old CSS to make it all look nice-ish.