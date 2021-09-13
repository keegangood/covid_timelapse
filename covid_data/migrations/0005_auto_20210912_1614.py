# Generated by Django 3.2.7 on 2021-09-12 23:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covid_data', '0004_auto_20210911_0254'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='country',
            options={'verbose_name_plural': 'countries'},
        ),
        migrations.AlterModelOptions(
            name='coviddatum',
            options={'verbose_name_plural': 'Covid Data'},
        ),
        migrations.AlterModelOptions(
            name='stateprovince',
            options={'verbose_name_plural': 'States/Provinces'},
        ),
        migrations.AlterField(
            model_name='coviddatum',
            name='fatality_ratio',
            field=models.DecimalField(decimal_places=10, default=0.0, max_digits=10, verbose_name='fatality ratio'),
        ),
        migrations.AlterField(
            model_name='coviddatum',
            name='incident_rate',
            field=models.DecimalField(decimal_places=10, default=0.0, max_digits=10, verbose_name='incident rate'),
        ),
    ]
