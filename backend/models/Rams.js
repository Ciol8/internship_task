module.exports = (sequlize, DataTypes) => {

    const Rams = sequlize.define("Rams", {
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
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }
    });

    Rams.associate = (models) => {
        Rams.belongsTo(models.RamType)
    }

    return Rams;
}