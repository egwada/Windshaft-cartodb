module.exports.name             = 'test';
module.exports.postgres         = {user: 'tileuser', host: '127.0.0.1', port: 5432};
module.exports.redis            = {host: '127.0.0.1', 
                                   port: 6379, 
                                   idleTimeoutMillis: 1,
                                   reapIntervalMillis: 1};
module.exports.windshaft_port   = 8080;
module.exports.lru_cache = false;
module.exports.lru_cache_size = 10000;
module.exports.enable_cors = true;