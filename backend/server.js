// Import required packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - runs before every request
app.use(cors()); // Allow frontend to access backend
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data

// ============================================
// ROUTES - API Endpoints
// ============================================

// Test route - check if server is running
app.get('/api/test', (req, res) => {
    res.json({ 
        success: true, 
        message: 'Backend is working!' 
    });
});

// GET all projects
app.get('/api/projects', async (req, res) => {
    try {
        // Query database
        const [rows] = await db.query('SELECT * FROM projects ORDER BY created_at DESC');
        
        // Send response
        res.json({ 
            success: true, 
            data: rows 
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// GET single project by ID
app.get('/api/projects/:id', async (req, res) => {
    try {
        const projectId = req.params.id;
        const [rows] = await db.query('SELECT * FROM projects WHERE id = ?', [projectId]);
        
        if (rows.length === 0) {
            return res.status(404).json({ 
                success: false, 
                message: 'Project not found' 
            });
        }
        
        res.json({ 
            success: true, 
            data: rows[0] 
        });
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// POST - Create new project
app.post('/api/projects', async (req, res) => {
    try {
        const { title, description, technologies, github_link, live_link, image_url } = req.body;
        
        // Validate required fields
        if (!title || !description) {
            return res.status(400).json({ 
                success: false, 
                message: 'Title and description are required' 
            });
        }
        
        // Insert into database
        const [result] = await db.query(
            'INSERT INTO projects (title, description, technologies, github_link, live_link, image_url) VALUES (?, ?, ?, ?, ?, ?)',
            [title, description, technologies, github_link, live_link, image_url]
        );
        
        res.status(201).json({ 
            success: true, 
            message: 'Project created successfully',
            id: result.insertId 
        });
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// PUT - Update project
app.put('/api/projects/:id', async (req, res) => {
    try {
        const projectId = req.params.id;
        const { title, description, technologies, github_link, live_link, image_url } = req.body;
        
        // Update database
        await db.query(
            'UPDATE projects SET title=?, description=?, technologies=?, github_link=?, live_link=?, image_url=? WHERE id=?',
            [title, description, technologies, github_link, live_link, image_url, projectId]
        );
        
        res.json({ 
            success: true, 
            message: 'Project updated successfully' 
        });
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// DELETE project
app.delete('/api/projects/:id', async (req, res) => {
    try {
        const projectId = req.params.id;
        
        // Delete from database
        await db.query('DELETE FROM projects WHERE id = ?', [projectId]);
        
        res.json({ 
            success: true, 
            message: 'Project deleted successfully' 
        });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

app.get("/", (req, res) => {
  res.send("✅ Backend API is working!");
});


// 404 handler - catches all undefined routes
app.use((req, res) => {
    res.status(404).json({ 
        success: false, 
        message: 'Route not found' 
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 API endpoints available at http://localhost:${PORT}/api`);
});