-- Enable required extensions for Discover Real Estate
-- This script runs when the PostgreSQL container starts for the first time

-- Enable PostGIS extension for geographic data
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS postgis_topology;

-- Enable pgvector extension for AI embeddings (vector similarity search)
-- Note: pgvector needs to be installed in the postgres image
-- For now, we'll prepare for it but it might need a custom image
-- CREATE EXTENSION IF NOT EXISTS vector;

-- Enable other useful extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS btree_gin;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Verify extensions are installed
SELECT extname FROM pg_extension WHERE extname IN ('postgis', 'postgis_topology', 'uuid-ossp', 'btree_gin', 'pg_trgm');