
namespace LibraryManagementSolution
{
    public interface IDataMigrations
    {
        bool SkippedMigrations { get; }

        void Initialize();
    }
}