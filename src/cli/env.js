const parseEnv = () => {
  const rssVars = Object.entries(process.env)
    .map(([key, value]) => `RSS_${key}=${value}`)
    .join("; \n");

  console.log(rssVars);
};

parseEnv();
