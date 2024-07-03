# in-process-app

XML:
<?xml version="1.0" encoding="utf-8" ?>
<!-- SQL XML created by WWW SQL Designer, https://github.com/ondras/wwwsqldesigner/ -->
<!-- Active URL: https://sql.toad.cz/ -->
<sql>
<datatypes db="mysql">
	<group label="Numeric" color="rgb(238,238,170)">
		<type label="Integer" length="0" sql="INTEGER" quote=""/>
	 	<type label="TINYINT" length="0" sql="TINYINT" quote=""/>
	 	<type label="SMALLINT" length="0" sql="SMALLINT" quote=""/>
	 	<type label="MEDIUMINT" length="0" sql="MEDIUMINT" quote=""/>
	 	<type label="INT" length="0" sql="INT" quote=""/>
		<type label="BIGINT" length="0" sql="BIGINT" quote=""/>
		<type label="Decimal" length="1" sql="DECIMAL" re="DEC" quote=""/>
		<type label="Single precision" length="0" sql="FLOAT" quote=""/>
		<type label="Double precision" length="0" sql="DOUBLE" re="DOUBLE" quote=""/>
	</group>

	<group label="Character" color="rgb(255,200,200)">
		<type label="Char" length="1" sql="CHAR" quote="'"/>
		<type label="Varchar" length="1" sql="VARCHAR" quote="'"/>
		<type label="Text" length="0" sql="MEDIUMTEXT" re="TEXT" quote="'"/>
		<type label="Binary" length="1" sql="BINARY" quote="'"/>
		<type label="Varbinary" length="1" sql="VARBINARY" quote="'"/>
		<type label="BLOB" length="0" sql="BLOB" re="BLOB" quote="'"/>
	</group>

	<group label="Date &amp; Time" color="rgb(200,255,200)">
		<type label="Date" length="0" sql="DATE" quote="'"/>
		<type label="Time" length="0" sql="TIME" quote="'"/>
		<type label="Datetime" length="0" sql="DATETIME" quote="'"/>
		<type label="Year" length="0" sql="YEAR" quote=""/>
		<type label="Timestamp" length="0" sql="TIMESTAMP" quote="'"/>
	</group>
	
	<group label="Miscellaneous" color="rgb(200,200,255)">
		<type label="ENUM" length="1" sql="ENUM" quote=""/>
		<type label="SET" length="1" sql="SET" quote=""/>
		<type label="Bit" length="0" sql="bit" quote=""/>
	</group>
</datatypes><table x="238" y="242" name="User Account">
<row name="id" null="1" autoincrement="1">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="isNewMember" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>0</default></row>
<row name="isAppAdmin" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>0</default></row>
<row name="isTaskAdmin" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>0</default></row>
<row name="isLeadership" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>0</default></row>
<row name="Member Name" null="1" autoincrement="0">
<datatype>CHAR</datatype>
<default>NULL</default></row>
<row name="Member Email" null="1" autoincrement="0">
<datatype>CHAR</datatype>
<default>NULL</default></row>
<row name="isInProcessed" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>0</default></row>
<key type="PRIMARY" name="">
<part>id</part>
</key>
<comment>App Admin: creates users + assigns roles </comment>
</table>
<table x="565.2222290039062" y="229" name="In-Processing Task">
<row name="id" null="1" autoincrement="1">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="Task Name" null="1" autoincrement="0">
<datatype>CHAR</datatype>
<default>NULL</default></row>
<row name="Task Details" null="1" autoincrement="0">
<datatype>CHAR</datatype>
<default>NULL</default></row>
<row name="Task Admin" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default><relation table="User Account" row="id" />
</row>
<key type="PRIMARY" name="">
<part>id</part>
</key>
<comment>App Admin: creates tasks incl Name, details, POC. Task Admin: can edit the name, details of a task</comment>
</table>
<table x="513.2222290039062" y="412" name="Member - Task Assignment">
<row name="id" null="1" autoincrement="1">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="idMember" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default><relation table="User Account" row="id" />
</row>
<row name="idTask" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default><relation table="In-Processing Task" row="id" />
</row>
<row name="isComplete" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<key type="PRIMARY" name="">
<part>id</part>
</key>
<comment>App Admin created assignments, default start as not completed.</comment>
</table>
</sql>
