module.exports = (sequlize, DataTypes) => {

    const Ram = sequlize.define("Ram", {
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        clockSpeed: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        casLatency: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isEcc: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    });

    Ram.associate = (models) => {
        Ram.belongsTo(models.RamType)
    }

    return Ram;
}