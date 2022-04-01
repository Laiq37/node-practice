|-| important note we can only send a single res on a request so can only one use json, send, render, end, redirect per request, b/c these method send 
    responses, and as we know that only one response will be sent per req otherwise we will get error cannt set headers.
|-| for clean code we have to create seperate our requests(routes) in seperate package and use it in mainFile(app.js), for that we have to create 
    a new instance of router and instead of express method we will use router object, and after setting-up router and connecting requests to handle
    then we have to set router in use method to work, for detail refer to router package/directory
|-| how to use bcryptjs to change plaintext to cypher to make credential secure(like password etc) refer to Thappa Technical youtube chanel at nodejs playlist vedio no 74