module.exports = (sequlize, DataTypes) => {

    const RamTypes = sequlize.define("RamTypes", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    RamTypes.associate = (models) => {
        RamTypes.hasMany(models.Rams)
    }

    return RamTypes;
}