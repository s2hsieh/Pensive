using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Pensive.Models;

namespace Pensive.Migrations
{
    [DbContext(typeof(PensiveContext))]
    partial class PensiveContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Pensive.Models.Thought", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Color");

                    b.Property<string>("Content");

                    b.Property<DateTime>("DateAdded");

                    b.Property<DateTime>("DateModified");

                    b.Property<int?>("ThoughtId");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("ThoughtId");

                    b.ToTable("Thoughts");
                });

            modelBuilder.Entity("Pensive.Models.Thought", b =>
                {
                    b.HasOne("Pensive.Models.Thought")
                        .WithMany("Links")
                        .HasForeignKey("ThoughtId");
                });
        }
    }
}
