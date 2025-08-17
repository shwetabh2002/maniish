export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // If it's a file request (contains a dot) or API request, let it through
  if (url.pathname.includes('.') || url.pathname.startsWith('/api/')) {
    return context.next();
  }
  
  // For all other routes, serve the main index.html
  const response = await context.env.ASSETS.fetch(new URL('/index.html', context.request.url));
  return new Response(response.body, {
    status: 200,
    headers: response.headers
  });
} 