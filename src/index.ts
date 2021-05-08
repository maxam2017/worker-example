addEventListener('fetch', (event) => {
  const res = new Response(
    JSON.stringify({ message: 'hello world' }),
    { status: 200 },
  );
  event.respondWith(res);
});
