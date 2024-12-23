"""empty message

Revision ID: e57dd9feb7c9
Revises: 8d339a0b7f85
Create Date: 2024-12-17 03:03:13.157655

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e57dd9feb7c9'
down_revision = '8d339a0b7f85'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('lastname', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('age', sa.String(length=120), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('age')
        batch_op.drop_column('lastname')
        batch_op.drop_column('name')

    # ### end Alembic commands ###
