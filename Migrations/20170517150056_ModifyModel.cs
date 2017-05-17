using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Pensive.Migrations
{
    public partial class ModifyModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Thoughts_Thoughts_ThoughtId",
                table: "Thoughts");

            migrationBuilder.DropIndex(
                name: "IX_Thoughts_ThoughtId",
                table: "Thoughts");

            migrationBuilder.DropColumn(
                name: "ThoughtId",
                table: "Thoughts");

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "Thoughts",
                maxLength: 200,
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Color",
                table: "Thoughts",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Thoughts",
                maxLength: 20,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Thoughts");

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "Thoughts",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 200);

            migrationBuilder.AlterColumn<string>(
                name: "Color",
                table: "Thoughts",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<int>(
                name: "ThoughtId",
                table: "Thoughts",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Thoughts_ThoughtId",
                table: "Thoughts",
                column: "ThoughtId");

            migrationBuilder.AddForeignKey(
                name: "FK_Thoughts_Thoughts_ThoughtId",
                table: "Thoughts",
                column: "ThoughtId",
                principalTable: "Thoughts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
