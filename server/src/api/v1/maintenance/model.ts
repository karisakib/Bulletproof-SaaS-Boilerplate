// models/MaintenanceMode.js
const mongoose = require('mongoose');

const maintenanceModeSchema = new mongoose.Schema({
    isActive: {
        type: Boolean,
        required: true,
        default: false
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

const MaintenanceMode = mongoose.model('MaintenanceMode', maintenanceModeSchema);

module.exports = MaintenanceMode;