const sequelize  = require('./DBconfig')
const DataTypes = require('sequelize')

//create model for database operations
const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ref_id: {
      type: DataTypes.STRING
    },
    twitch_user_id: {
        type: DataTypes.STRING
    },
    login: {
        type: DataTypes.STRING
    },
    display_name: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    broadcaster_type: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    profile_image_url: {
        type: DataTypes.STRING
    },
    offline_image_url: {
        type: DataTypes.STRING
    },
    view_count: {
        type: DataTypes.INTEGER
    },
    channel_created_at: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    },
});

module.exports = User
